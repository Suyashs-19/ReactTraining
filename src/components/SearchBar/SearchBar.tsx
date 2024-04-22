const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        className=" form-control sd-searchbar pb-2"
        placeholder="Search item.."
      />
      <button className="btn btn-primary m-3">Search</button>
    </div>
  );
};

export default SearchBar;
