import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const RestaurantCategoryBody = (props) => {
  const { items } = props;
  const dispatch = useDispatch();

  const handleaddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
          >
            <div className="p-2 w-9/12 flex flex-col">
              <span className="font-bold w-40">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="text-start w-96">
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button
                  className="p-2 w-14 mx-14 rounded-lg bg-black text-white shadow-lg absolute m-auto text-xs"
                  onClick={() => handleaddItem(item)}
                >
                  Add +
                </button>
              </div>

              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-40 mx-3"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCategoryBody;
