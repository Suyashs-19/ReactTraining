import { CiFilter } from "react-icons/ci";
interface Props {
  onClickFilter: (value: string) => void;
}
const Filter = ({ onClickFilter }: Props) => {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter
          <CiFilter />
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => {
                onClickFilter("HighLow");
              }}
            >
              Price High to Low
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => {
                onClickFilter("LowHigh");
              }}
            >
              Price Low to High
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => {
                onClickFilter("Popularity");
              }}
            >
              Sort by Popularity ⭐
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Filter;
