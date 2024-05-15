import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../UserContext";
import newUserImage from '../components/newUserImage.jpg';

function Header() {
  const { user, updateUserName, updateUserAvatar } = useContext(UserContext);

  const handleChangeName = () => {
    updateUserName("Seik");
    updateUserAvatar(newUserImage);
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
              <li className="nav-item active me-4">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                  style={{ position: 'relative' }}
                >
                  Home
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: '-1px',
                      width: '100%',
                      height: '3px',
                      backgroundColor: 'yellow',
                      content: '',
                    }}
                  />
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link text-light" to="/time">
                  Movies
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link text-light" to="/">
                  TV Show
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link text-light" to="/">
                  Video
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link text-light" to="/">
                  FAQ
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link text-light" to="/">
                  Pricing
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link text-light" to="/">
                  Contact Us
                </Link>
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
                    style={{ border: "none", backgroundColor: "transparent" }}
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
