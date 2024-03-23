import { useState, useEffect } from "react";
import { SWIGGY_MENU_API } from "../../utils/constants";
import Shimmer from "./Shimmer";
import DishName from "./DishName";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { resId } = useParams();

  const fetchData = async () => {
    let data = await fetch(SWIGGY_MENU_API.replace("resId", resId));
    data = await data.json();
    console.log(data);
    setRestaurantMenu(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!restaurantMenu) return <Shimmer />;
  else {
    const { name, cuisines, costForTwoMessage } =
      restaurantMenu?.cards[0]?.card?.card?.info;

    let itemCards;

    if (
      restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.carousel
    ) {
      itemCards =
        restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
          ?.card?.card?.carousel;
    } else {
      itemCards =
        restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
          ?.card?.card?.itemCards;
    }

    console.log(itemCards);

    return (
      <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(", ") + " - " + costForTwoMessage}</p>
        <ul>
          {itemCards.map((ele) => {
            let key;
            if (ele?.card?.info?.name) {
              key = ele?.card?.info?.id;
            } else {
              key = ele?.dish?.info?.id;
            }
            return <DishName key={key} elem={ele} />;
          })}
        </ul>
      </div>
    );
  }
};

export default RestaurantMenu;
