import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../reduxstore/cartSlice";

{
  /* Accordion Body */
}
const ItemList = ({ items }) => {

  const dispatch = useDispatch();

 const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  //console.log(items);
  
  return (
    <div>
      {items.map((item) => (
        <div
        data-testid = "foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-black border-b-2 border-opacity-10 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <p>{item.card.info.isVeg ? "🟢" : "🔴"}</p>
              <span className="font-semibold">{item.card.info.name}</span>
              <p>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
            </div>
            <p className="text-sm pt-6">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute mt-28">
              <button
                className="p-1 mx-3 w-24 rounded-md bg-white text-green-500 shadow-lg font-bold border border-solid border-green-500 "
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-2xl "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
