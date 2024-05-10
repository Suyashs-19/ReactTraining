import { useEffect, useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import ItemList from "../components/Products/ItemList";
import SearchBar from "../components/SearchBar/SearchBar";
import { Product } from "../Product";
import Filter from "../components/Filter/Filter";
import { useSelector } from "react-redux";

const HomePage = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const items: Product[] = useSelector((state: any) => state.items);
  const [itemsList, setItemsList] = useState(items);

  // Update itemsList whenever items changes
  useEffect(() => {
    setItemsList(items);
  }, [items]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-baseline mt-5 ">
        <SearchBar />
        <Filter />
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
