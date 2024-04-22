import Filter from "../components/Filter/Filter";
import SearchBar from "../components/SearchBar/SearchBar";

const HomePage = () => {
  return (
    <div className="d-flex justify-content-between align-items-baseline ">
      <SearchBar />
      <Filter />
    </div>
  );
};

export default HomePage;
