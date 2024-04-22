const Header = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-between py-3 mb-3 border-bottom">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
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
      </header>
    </div>
  );
};

export default Header;
