import React, { useContext } from "react"; // 导入 useContext
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // 导入 Bootstrap 样式
import { UserContext } from "../UserContext"; // 导入 UserContext

function Header() {
  const { user, updateUserName } = useContext(UserContext); // Assuming user context includes both user info and update function
  // Check if user context is provided correctly and includes these properties

  const handleChangeName = () => {
    updateUserName("seik");
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 10%, #000000 100%)",
      }}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container text-center">
          <Link className="navbar-brand fs-2 fw-bold text-light me-4" to="/">
            PcariMovie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item me-4">
                <Link
                  className="nav-link active text-light "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link text-light" to="/time">
                  Movies
                </Link>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-light" href="#">
                  TV Show
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-light" href="#">
                  Video
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-light" href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-light" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-light" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <Link to="/search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-search me-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </Link>
              <div className="d-flex align-items-center ms-5 ">
                <img
                  src={user.avatar}
                  className="img-thumbnail rounded-circle border-dark me-2 "
                  alt="User"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "black",
                    padding: "0px",
                  }}
                />
                <div>
                  <button
                    className="m-0 fw-bold text-light"
                    onClick={handleChangeName}
                  >
                    {user.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
