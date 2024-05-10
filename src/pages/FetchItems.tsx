import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemAction } from "../store/ItemSlice";
import { fetchStatusAction } from "../store/FetchStatusSlice";

const FetchItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("USEEFFECT");
    axios
      .get("https://fakestoreapi.com/products", { signal })
      .then((res) => res.data)
      .then((item) => {
        dispatch(itemAction.addItems(item));
        dispatch(fetchStatusAction.setFetchStatusDone(true));
      });

    return () => {
      controller.abort();
    };
  }, []);
  return <></>;
};

export default FetchItems;
