import { CiFilter } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { itemAction } from "../../store/ItemSlice";

const Filter = () => {
  const dispatch = useDispatch();
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
                dispatch(itemAction.filterItems("HighLow"));
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
                dispatch(itemAction.filterItems("LowHigh"));
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
                dispatch(itemAction.filterItems("Popularity"));
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
