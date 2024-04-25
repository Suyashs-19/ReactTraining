import Filter from "../components/Filter/Filter";
import Pagination from "../components/Pagination/Pagination";
import ItemList from "../components/Products/ItemList";
import SearchBar from "../components/SearchBar/SearchBar";

const HomePage = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-baseline ">
        <SearchBar />
        <Filter />
      </div>
      <ItemList />
      <Pagination />
    </>
  );
};

export default HomePage;
