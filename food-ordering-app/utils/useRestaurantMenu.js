import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API } from "./constants";

const useRestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    let data = await fetch(SWIGGY_MENU_API.replace("resId", resId));
    data = await data.json();
    setResInfo(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
