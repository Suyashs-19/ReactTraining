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
    const API_URL = import.meta.env.VITE_APP_API_URL;

    axios
      .get(API_URL, { signal })
      .then((res) => res.data)
      .then((items) => {
        dispatch(itemAction.addItems(items));
        dispatch(fetchStatusAction.setFetchStatusDone(true));
      })
      .catch((err) => console.log(err.message));

    return () => {
      controller.abort();
    };
  }, []);
  return <></>;
};

export default FetchItems;
