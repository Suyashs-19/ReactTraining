import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import { CARTITEMS } from "../../utils/constants";

const Cart: React.FC = () => {
  return (
    <div className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul className={classes.cartList}>
        {CARTITEMS.map((item) => (
          <CartItem
            key={item.id}
            item={{
              title: item.title,
              quantity: item.id,
              total: item.price,
              price: item.price,
              id: item.id,
            }}
          />
        ))}
      </ul>
      <div className={classes.footer}>
        <div className={classes.totalPrice}>
          Total Price: $1234 {/* Update with actual total price */}
        </div>
        <button
          className={classes.proceedButton}
          onClick={() => alert("Are you sure ?")}>
          Proceed to Pay
        </button>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Cart;
