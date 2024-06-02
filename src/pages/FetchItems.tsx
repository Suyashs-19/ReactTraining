import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemAction } from "../store/ItemSlice";
import { fetchStatusAction } from "../store/FetchStatusSlice";
import productService from "../services/product-service";
import { Product } from "../interfaces/Product";

const FetchItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { request, cancel } = productService.getAll<Product>();

    request
      .then((res) => {
        dispatch(itemAction.addItems(res.data));
        dispatch(fetchStatusAction.setFetchStatusDone(true));
      })
      .catch((err) => console.log(err.message));

    return () => {
      cancel();
    };
  }, []);
  return <></>;
};

export default FetchItems;
