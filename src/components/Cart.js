import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../reduxstore/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto bg-slate-200 rounded-2xl pb-2 pt-6 shadow-xl">
        <button
          className="p-2 m-2 bg-white text-green-500 rounded-lg border border-solid border-green-500"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        
        <ItemList items={cartItems} />
        {cartItems.length === 0 && (
          <h1 className="p-4">
            <span className="m-4 p-4 text-xl font-bold">
              Your cart is empty😢
            </span>
            <p className="m-2 p-2"> You can go to home page to view more restaurants😃!!! </p>
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
