import { CiShoppingCart } from "react-icons/ci";

const Cart = () => {
  return (
    <button className="btn sd-cart-btn nav-link">
      <CiShoppingCart size="27px" />
      <div className="sd-div">0</div>
    </button>
  );
};

export default Cart;
