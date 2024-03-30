import {
  RestaurantCard,
  WithPromotedLabel,
} from "./../components/RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";
import restaurant_data from "../../utils/restaurant-data";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  let [restaurantListFromApi, setRestaurantListFromApi] = useState("");
  let [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  const PromotedLabel = WithPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    setRestaurantListFromApi(restaurant_data);
    setListOfRestaurant(restaurant_data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!useOnlineStatus())
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );

  if (!listOfRestaurant.length) {
    return <Shimmer />;
  } else
    return (
      <div className="body">
        {/* {console.log(restaurantListFromApi)} */}
        <div className="flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              className="px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-lg"
              onClick={() => {
                if (!searchText) {
                  setListOfRestaurant(restaurantListFromApi);
                  return;
                }
                let filtered_restaurants = [];
                filtered_restaurants = restaurantListFromApi.filter(
                  (restaurant) => {
                    console.log(
                      searchText,
                      restaurant.info.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    );
                    return restaurant.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase());
                  }
                );
                !filtered_restaurants.length
                  ? setListOfRestaurant(restaurantListFromApi)
                  : setListOfRestaurant(filtered_restaurants);
              }}
            >
              Search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-gray-100 cursor-pointer rounded-lg"
              onClick={() => {
                const filteredList = listOfRestaurant.filter((restaurant) => {
                  return restaurant.info.avgRating > 4;
                });
                console.log(filteredList);
                setListOfRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <label>UserName: </label>
            <input
              className="border border-black p-2 mx-2"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {listOfRestaurant.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={`/restaurant/${restaurant.info.id}`}
              >
                {restaurant.info.avgRating < 4.4 ? (
                  <RestaurantCard resData={restaurant} />
                ) : (
                  <PromotedLabel resData={restaurant} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    );
};

export default Body;
