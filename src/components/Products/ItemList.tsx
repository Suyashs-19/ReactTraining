import Item from "./Item";

const ItemList = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <Item /> <Item /> <Item />
      </div>
    </div>
  );
};

export default ItemList;
