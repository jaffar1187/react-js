import { CDN_URL_2 } from "./../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    resData.info;
  const { deliveryTime } = sla;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-200 bg-gray-100">
      <img
        src={`${CDN_URL_2}${cloudinaryImageId}`}
        alt="Restaurant Image"
        className="rounded-lg"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>
        {cuisines.length < 3
          ? cuisines.join(", ")
          : cuisines.slice(0, 3).join(", ") + "..."}
      </h4>
      <h4>{avgRating + " stars"}</h4>
      <h4>{costForTwo.toUpperCase()}</h4>
      <h4>{deliveryTime + " minutes"}</h4>
    </div>
  );
};

const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export { RestaurantCard, WithPromotedLabel };
