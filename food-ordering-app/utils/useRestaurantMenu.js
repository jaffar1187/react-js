import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API } from "./constants";
import restaurant_category_body_data from "./../utils/restaurant-category-body-data";

const useRestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    setResInfo(restaurant_category_body_data[resId]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
