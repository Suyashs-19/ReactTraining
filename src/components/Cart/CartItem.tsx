import { MdDelete } from "react-icons/md";
import classes from "./CartItem.module.scss";
// import { useDispatch } from "react-redux";
import { Product } from "../../interfaces/Product";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/CartSlice";
import { useState } from "react";
import { CartProduct } from "../../interfaces/CartProduct";

interface Props {
  item: CartProduct;
}
const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  // const items: CartProduct[] = useSelector((state: any) => state.cart);
  // const [quantity, setQuantity] = useState(1);

  const additemHandler = (item: Product) => {
    dispatch(cartAction.updateCartItemQuantity(item.id));
  };

  const removeitemHandler = (item: Product) => {
    dispatch(cartAction.deacreaseItemFromCart(item.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <p>{item.title}</p>
        <div className={classes.price}>
          ₹{item.price}
          <span className={classes.itemprice}>
            (₹{item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>

        <div className={classes.actions}>
          <button onClick={() => additemHandler(item)}>+</button>
          <button onClick={() => removeitemHandler(item)}>-</button>
        </div>
        <MdDelete
          onClick={() => dispatch(cartAction.removeItemFromCart(item.id))}
          color="red"
          size="20px"
          cursor="pointer"
        />
      </div>
    </li>
  );
};

export default CartItem;
