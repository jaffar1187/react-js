import { useState } from "react";
import RestaurantCategoryBody from "./RestaurantCategoryBody";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex, index, showIndex } = props;

  const handleClick = () => {
    index === showIndex ? setShowIndex(false) : setShowIndex(index);
  };

  return (
    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-6">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <RestaurantCategoryBody items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
