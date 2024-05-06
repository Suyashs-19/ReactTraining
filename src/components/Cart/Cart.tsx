import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Product } from "../../Product";

const Cart: React.FC = () => {
  const cartList: Product[] = useSelector((state: any) => state.cart);
  const totalCartPrice = cartList.reduce(
    (acc, cartItem) => acc + cartItem.price,
    0
  );
  return (
    <div className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul className={classes.cartList}>
        {cartList.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className={classes.footer}>
        <div className={classes.totalPrice}>
          {totalCartPrice == 0 ? (
            <h3>Cart is Empty</h3>
          ) : (
            <h5>Total Price: ₹ {totalCartPrice}</h5>
          )}
        </div>
        {cartList.length !== 0 && (
          <button
            className={classes.proceedButton}
            onClick={() => alert("Are you sure ?")}
          >
            Proceed to Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
