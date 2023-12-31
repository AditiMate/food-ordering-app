import { CDN_URL } from "../utils/constants";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";


const RestaurantCard = (props) => {

  //const {loggedInUser} = useContext(UserContext);
  //console.log(loggedInUser);

  const { resData } = props;
  //console.log(resData);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info; //Optional chaining  

  return (
    <div data-testid="resCard" className="m-4 ml-5 p-4 w-[300px] rounded-2xl bg-gray-200 hover:bg-gray-300" >
      <img
        className="rounded-2xl"
        alt="res-logo"
        src={ CDN_URL + cloudinaryImageId}
        // style={{borderRadius:'20px'}}
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      {/* <h4>{loggedInUser}</h4> */}
    </div>
  );
};

//Higher Order component
//(input) RestaurantCard  => RestaurantCardVeg(output)

export const withPureVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-600 text-white m-2 p-1 rounded-lg">Veg Only</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
