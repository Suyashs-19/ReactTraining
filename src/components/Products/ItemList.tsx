import { Product } from "../../Product";
import Item from "./Item";
interface Props {
  items: Product[];
}

const ItemList = ({ items }: Props) => {
  return (
    <div className="container text-center">
      <div className="row">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
