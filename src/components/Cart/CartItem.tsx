import { MdDelete } from "react-icons/md";
import classes from "./CartItem.module.scss";
// import { useDispatch } from "react-redux";
import { Product } from "../../Product";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/CartSlice";

interface Props {
  item: Product;
}
const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const additemHandler = () => {
    alert("item added");
  };

  const removeitemHandler = () => {
    alert("item removed");
  };

  return (
    <li className={classes.item}>
      <header>
        <p>{item.title}</p>
        <div className={classes.price}>
          ₹{item.price}
          <span className={classes.itemprice}>
            {" "}
            (₹{item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        {/* <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div> */}
        <div className={classes.actions}>
          <MdDelete
            onClick={() => dispatch(cartAction.removeItemFromCart(item))}
            color="red"
            size="20px"
            cursor="pointer"
          />
          {/* <button onClick={additemHandler}>+</button> */}
        </div>
      </div>
    </li>
  );
};

export default CartItem;
