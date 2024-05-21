import classes from "./CartItem.module.scss";

type CartItem = {
  title: string;
  quantity: number;
  total: number;
  price: number;
};

type CartProps = {
  item: CartItem;
};

export default function CartItem({ item }: CartProps) {
  const { title, quantity, total, price } = item;

  const additemHandler = () => {
    alert("item added");
  };

  const removeitemHandler = () => {
    alert("item removed");
  };

  return (
    <li className={classes.item}>
      <header>
        <h5>{title}</h5>
        <div className={classes.price}>
          {total}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeitemHandler}>-</button>
          <button onClick={additemHandler}>+</button>
        </div>
      </div>
    </li>
  );
}
