import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import DishName from "./DishName";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import getItemCards from "../../utils/getItemCards";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();

  if (!resInfo) return <Shimmer />;
  else {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;

    const itemCards = getItemCards(resInfo);

    return (
      <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(", ") + " - " + costForTwoMessage}</p>
        <ul>
          {itemCards.map((ele) => {
            let key;
            if (ele?.card?.info?.name) key = ele?.card?.info?.id;
            else key = ele?.dish?.info?.id;

            return <DishName key={key} elem={ele} />;
          })}
        </ul>
      </div>
    );
  }
};

export default RestaurantMenu;
