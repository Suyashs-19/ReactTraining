import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import ItemList from "../components/Products/ItemList";
import SearchBar from "../components/SearchBar/SearchBar";
import { Product } from "../interfaces/Product";
import Filter from "../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { INITIAL_PAGE_NUMBER, ITEMS_PER_PAGE } from "../utils/constants";
import { searchAction } from "../store/SearchSlice";

const HomePage = () => {
  const itemsPerPage = ITEMS_PER_PAGE;
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_NUMBER);
  const itemsList: Product[] = useSelector((state: any) => state.items);
  const { results } = useSelector((state: any) => state.search);
  const searchResults = results;
  const dispatch = useDispatch();
  const [searchActive, setSearchActive] = useState(false);
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
  const handleSearch = (queryString: string) => {
    const query = queryString.toLowerCase();
    if (query.trim() === "") {
      dispatch(searchAction.setSearchResults([]));
    } else {
      const filteredItems = itemsList.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredItems.length != 0)
        dispatch(searchAction.setSearchResults(filteredItems));
    }
  };

  const handleSlice = (itemsArray: Product[]) => {
    return itemsArray.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  };
  const ceilValue = (itemsArray: Product[]) => {
    return Math.ceil(itemsArray.length / itemsPerPage);
  };

  const onSearchSubmit = (input: string) => {
    event?.preventDefault();
    handleSearch(input);
    dispatch(searchAction.setIsActive(true));
  };

  const onClearResults = (textRef: any) => {
    dispatch(searchAction.setSearchResults([]));
    textRef.current!.value = "";
    dispatch(searchAction.setIsActive(false));
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-baseline mt-5 ">
        <div className="mb-3">
          <SearchBar
            handleSubmit={onSearchSubmit}
            handleClearResults={onClearResults}
          />
          <p>
            {searchResults.length > 0 && `${searchResults.length} items found`}
          </p>
        </div>
        <Filter />
      </div>
      <ItemList
        items={
          searchResults.length
            ? handleSlice(searchResults)
            : handleSlice(itemsList)
        }
      />
      <Pagination
        totalPages={
          searchResults.length ? ceilValue(searchResults) : ceilValue(itemsList)
        }
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default HomePage;
