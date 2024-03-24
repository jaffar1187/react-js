const getItemCards = (resInfo) => {
  let itemCards;
  if (
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.carousel
  ) {
    itemCards =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.carousel;
  } else {
    itemCards =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
  }
  return itemCards;
};

export default getItemCards;
