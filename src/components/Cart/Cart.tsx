import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { CartProduct } from "../../interfaces/CartProduct";
import strings from "./Cart.json";

const Cart: React.FC = () => {
  const cartList: CartProduct[] = useSelector((state: any) => state.cart);
  const totalCartPrice = cartList.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
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
            <h3>{strings.titles.emptyCart}</h3>
          ) : (
            <h5>
              {strings.titles.totalPrice}
              {totalCartPrice.toFixed(2)}
            </h5>
          )}
        </div>
        {cartList.length !== 0 && (
          <button
            className={classes.proceedButton}
            onClick={() => alert(strings.alerts.proceedConfirmation)}
          >
            {strings.buttons.proceedToPay}
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
