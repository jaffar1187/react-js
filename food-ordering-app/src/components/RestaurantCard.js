import { CDN_URL } from "./../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, costForTwo, avgRating, sla, cloudinaryImageId } = resData.info;
  const { deliveryTime } = sla;
  return (
    <div className="res-card">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="meghana food"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{costForTwo.toUpperCase()}</h4>
      <h4>{avgRating + " ⭐️ "}</h4>
      <h4>{deliveryTime + " minutes"}</h4>
    </div>
  );
};

export default RestaurantCard;
