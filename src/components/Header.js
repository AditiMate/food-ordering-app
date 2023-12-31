import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  //Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  // console.log("Header render");

  // useEffect (() => {
  //   console.log("useEffect called");
  // },[btnName]);

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-8">
          <li className="px-4 mt-2">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 hover:bg-orange-400 rounded-3xl p-2">
            <Link className="" to="/">
              Home
            </Link>
          </li>
          <li className="px-4 hover:bg-orange-400 rounded-3xl p-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:bg-orange-400 rounded-3xl p-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="px-4 hover:bg-orange-400 rounded-3xl p-2">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-4 hover:bg-orange-400 rounded-3xl p-2 font-bold">
            <Link to="/cart">🛒({cartItems.length} items)</Link>
          </li>
          <button
            className="text-lg px-5 py-2 bg-orange-400 rounded-3xl ml-2"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold hover:bg-orange-400 rounded-3xl p-2">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

//Default Export
export default Header;
