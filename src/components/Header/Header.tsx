import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Product } from "../../interfaces/Product";
import strings from "./Header.json";
import { useState } from "react";
const Header = () => {
  const cartList: Product[] = useSelector((state: any) => state.cart);
  const [titleSelected, setTitleSelected] = useState(strings.titles[0]);
  const linkHandler = (title: string) => {
    setTitleSelected(title);
  };
  return (
    <div className="container sd-header ">
      <header className="d-flex justify-content-between py-3 mb-3 border-bottom">
        <ul className="nav nav-pills">
          {strings.titles.map((title) => (
            <li key={title} className="nav-item">
              <Link
                to={`${title === strings.titles[0] ? "/" : "#"}`}
                className={`nav-link ${titleSelected === title && "active"}`}
                aria-current="page"
                onClick={() => linkHandler(title)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="cart" className={`nav-item active`}>
          <button
            className="btn sd-cart-btn"
            onClick={() => {
              setTitleSelected("");
            }}
          >
            <CiShoppingCart size="27px" />
            <div className="sd-div">{cartList.length}</div>
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
