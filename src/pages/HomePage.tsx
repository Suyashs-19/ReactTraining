import { useEffect, useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import ItemList from "../components/Products/ItemList";
import SearchBar from "../components/SearchBar/SearchBar";
import { Product } from "../interfaces/Product";
import Filter from "../components/Filter/Filter";
import { useSelector } from "react-redux";
import { INITIAL_PAGE_NUMBER, ITEMS_PER_PAGE } from "../utils/constants";

const HomePage = () => {
  const itemsPerPage = ITEMS_PER_PAGE;
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_NUMBER);
  const itemsList: Product[] = useSelector((state: any) => state.items);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight
  //     ) {
  //       console.log("user scrolled to bottom !!!!!!!!");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
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
        totalPages={Math.ceil(itemsList.length / itemsPerPage)}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default HomePage;
