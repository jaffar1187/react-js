import RestaurantCard from "./../components/RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  let [restaurantListFromApi, setRestaurantListFromApi] = useState("");
  let [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    let restaurant_list = await fetch(SWIGGY_API);
    restaurant_list = await restaurant_list.json();
    setRestaurantListFromApi(
      restaurant_list?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestaurant(
      restaurant_list?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !listOfRestaurant.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={`/restaurant/${restaurant.info.id}`}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
