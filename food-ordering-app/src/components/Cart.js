import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import RestaurantCategoryBody from "./RestaurantCategoryBody";

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg my-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {!cartItems.length && <h1>Cart is empty, Add items to the cart!</h1>}
        <RestaurantCategoryBody items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
