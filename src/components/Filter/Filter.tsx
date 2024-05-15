import { CiFilter } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { itemAction } from "../../store/ItemSlice";
import { FILTER_OPTIONS } from "../../utils/constants";
import strings from "./Filter.json";

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
          {strings.buttons.filter}
          <CiFilter />
        </button>
        <ul className="dropdown-menu">
          {FILTER_OPTIONS.map((filterValue, index) => (
            <li key={index}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => {
                  dispatch(itemAction.filterItems(filterValue.value));
                }}
              >
                {filterValue.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Filter;
