import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
 
  const handleClick = () => {
    setShowIndex();
  };

  //Uncontrolled component
  // const [showItems, setShowItems] = useState(false);

  // const handleClick = () => {
  //   setShowItems(!showItems);
  // }
 
  //console.log(data);
  return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 rounded-lg ">
        <div className="flex justify-between cursor-pointer " onClick={handleClick} >  
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🡫</span>
        </div>
        {/* Accordion Body */}
       {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
