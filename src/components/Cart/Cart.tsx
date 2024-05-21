import classes from "./Cart.module.scss";
import CartItem  from "./CartItem";
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
    </div>
  );
};

export default Cart;
