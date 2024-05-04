import { Product } from "../../Product";
import { FaShoppingCart } from "react-icons/fa";
interface Props {
  item: Product;
  addItemtoCart: (item: Product) => void;
}
const Item = ({ item, addItemtoCart }: Props) => {
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
          <a
            href="#"
            className="btn btn-success"
            onClick={() => addItemtoCart(item)}
          >
            Add to Cart <FaShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
