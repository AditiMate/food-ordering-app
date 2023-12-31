//import RestaurantCard, { withPureVegLabel } from "./RestaurantCard";
//import resList from "../utils/mockData";
import RestaurantCard, { withPureVegLabel} from './RestaurantCard'
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardVeg = withPureVegLabel(RestaurantCard);

  //console.log("Body rendered", listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  //Fetching Data
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    //Optional Chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //This path can change when swiggy updates it's API
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //console.log("Body rendered");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Looks like you're offline!! Please check your internet connection...😔😔
      </h1>
    );

    const { loggedInUser, setUserName } = useContext(UserContext);

  //Loading logic
  //Conditional Rendering

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black h-9 w-60 rounded-xl"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="text-lg px-5 py-2 bg-orange-400 rounded-xl m-4 hover:bg-white border border-solid border-orange-600 "
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //searchText
              //console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="rounded-lg flex items-center ">
          {/* <button
            className="px-4 py-2 bg-gray-300  hover:bg-white text-black border border-solid border-black rounded-xl"
            onClick={() => {
              //console.log("Button clicked");
              //filter logic
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button> */}
        </div>

        <div className=" m-4 p-4 rounded-lg flex items-center ">
          <label> Username : </label>
          <input
            type="text"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="body-link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/**if the restaurant is pure veg then add pure veg label to it */}
            {restaurant.info.veg ? (
              <RestaurantCardVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
