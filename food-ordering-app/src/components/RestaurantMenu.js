import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import DishName from "./DishName";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import getItemCards from "../../utils/getItemCards";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();
  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <Shimmer />;
  else {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;

    const { itemCards, categories } = getItemCards(resInfo);

    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ") + " - " + costForTwoMessage}
        </p>
        {/* <ul>
          {itemCards.map((ele) => {
            let key;
            if (ele?.card?.info?.name) key = ele?.card?.info?.id;
            else key = ele?.dish?.info?.id;

            return <DishName key={key} elem={ele} />;
          })}
        </ul> */}
        <ul>
          {categories.map((category, index) => {
            return (
              <RestaurantCategory
                data={category.card.card}
                key={category.card.card.title}
                index={index}
                showIndex={showIndex}
                showItems={showIndex === index ? true : false}
                setShowIndex={setShowIndex}
              />
            );
          })}
        </ul>
      </div>
    );
  }
};

export default RestaurantMenu;
