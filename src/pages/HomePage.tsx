import { useEffect, useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import ItemList from "../components/Products/ItemList";
import SearchBar from "../components/SearchBar/SearchBar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/ItemSlice";
import { Product } from "../Product";
import Filter from "../components/Filter/Filter";

const HomePage = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((item) => console.log(item));
  // }, []);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data)
      .then((item) => dispatch(itemAction.addItems(item)));
  }, []);

  const items: Product[] = useSelector((state) => state.items);
  // Update itemsList whenever items changes
  useEffect(() => {
    setItemsList(items);
  }, [items]);

  const [itemsList, setItemsList] = useState(items);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleFilter = (filterType: string) => {
    if (filterType === "HighLow") {
      const newFilterItems = [...itemsList].sort(
        (itemA, itemB) => itemB.price - itemA.price
      );
      setItemsList(newFilterItems);
      console.log(newFilterItems);
    } else if (filterType === "LowHigh") {
      const newFilterItems = [...itemsList].sort(
        (itemA, itemB) => itemA.price - itemB.price
      );
      setItemsList(newFilterItems);
    } else {
      const newFilterItems = [...itemsList].sort(
        (itemA, itemB) => itemB.rating.rate - itemA.rating.rate
      );
      setItemsList(newFilterItems);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-baseline ">
        <SearchBar />
        <Filter onClickFilter={handleFilter} />
      </div>
      <ItemList
        items={itemsList.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )}
      />
      <Pagination
        totalPages={Math.ceil(items.length / itemsPerPage)}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default HomePage;
