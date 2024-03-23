const DishName = (props) => {
  const { elem } = props;
  let dishName, price;
  if (elem?.card?.info?.name) {
    dishName = elem?.card?.info?.name;
    price =
      elem?.card?.info?.price / 100 || elem?.card?.info?.defaultPrice / 100;
  } else {
    dishName = elem?.dish?.info?.name;
    price =
      elem?.dish?.info?.price / 100 || elem?.dish?.info?.defaultPrice / 100;
  }
  return (
    <li>
      {dishName} - Rs.{price}
    </li>
  );
};

export default DishName;
