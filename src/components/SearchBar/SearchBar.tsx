import { useRef } from "react";
import { useSelector } from "react-redux";
interface Props {
  handleSubmit: (input: string) => void;
  handleClearResults: (textRef: any) => void;
}
const SearchBar = ({ handleSubmit, handleClearResults }: Props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const { isActive } = useSelector((state: any) => state.search);
  // const searchHandler = () => {
  //   event?.preventDefault();
  //   onSearch(textRef.current!.value);
  //   setSearchActive(true);
  // };

  return (
    <form onSubmit={() => handleSubmit(textRef.current!.value)}>
      <div>
        <input
          type="text"
          ref={textRef}
          className=" form-control sd-searchbar pb-2"
          placeholder="Search item.."
        />
        <button className="btn btn-primary m-3">Search</button>
        {isActive && (
          <button
            className="btn btn-secondary"
            onClick={() => handleClearResults(textRef)}
          >
            clear results
          </button>
        )}{" "}
      </div>
    </form>
  );
};

export default SearchBar;
