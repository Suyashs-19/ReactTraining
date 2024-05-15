import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../interfaces/Product";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { cartAction } from "../../store/CartSlice";
import { CartProduct } from "../../interfaces/CartProduct";
import strings from "./Item.json";
interface Props {
  item: Product;
}
const Item = ({ item }: Props) => {
  const dispatch = useDispatch();
  const cartList: CartProduct[] = useSelector((state: any) => state.cart);
  const insideCart = cartList.find((val) => val.id === item.id);

  return (
    <div className="col">
      <div className="card" style={{ width: "250px", margin: "12px" }}>
        <div className="sd-image-wrapper">
          <img src={item.image} className="sd-image" alt="..." />
        </div>
        <div className="mb-3">
          {item.rating.rate}⭐ | {item.rating.count}
        </div>
        <div className="card-body">
          <h5 className="mb-3">{item.title}</h5>
          <p className="card-text">{item.description.slice(0, 50)}....</p>
          <div className="mb-3">
            <span style={{ fontWeight: "bold", color: "gray" }}>Price</span> ₹
            {item.price}
          </div>
          {insideCart ? (
            <a
              className="btn btn-danger"
              onClick={() => dispatch(cartAction.removeItemFromCart(item.id))}
            >
              {strings.buttons.removeFromCart} <MdDelete />
            </a>
          ) : (
            <a
              className="btn btn-success"
              onClick={() =>
                dispatch(
                  cartAction.addItemToCart({
                    ...item,
                    quantity: 1,
                  })
                )
              }
            >
              {strings.buttons.addToCart} <FaShoppingCart />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
