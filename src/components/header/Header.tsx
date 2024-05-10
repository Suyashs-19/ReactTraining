import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Product } from "../../Product";

const Header = () => {
  const cartList: Product[] = useSelector((state: any) => state.cart);
  return (
    <div className="container sd-header">
      <header className="d-flex justify-content-between py-3 mb-3 border-bottom">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/"
              className={`nav-link ${(ob: { isActive: boolean }) =>
                ob.isActive ? "active" : ""}`}
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link " aria-current="page">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link " aria-current="page">
              Features
            </a>
          </li>
        </ul>
        <NavLink
          to="cart"
          className={`nav-item ${(ob: { isActive: boolean }) =>
            ob.isActive ? "active" : ""}`}
        >
          <button className="btn sd-cart-btn">
            <CiShoppingCart size="27px" />
            <div className="sd-div">{cartList.length}</div>
          </button>
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
