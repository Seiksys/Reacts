import React from "react";
import userImage from "./my.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // 导入 Bootstrap 样式

function Header() {
  return (
    <div className="d-flex flex-column"style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0) 1%, #000000 100%)" }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container text-center">
          <a className="navbar-brand fs-2 fw-bold text-light me-4" href="#">
            PcariMovie
          </a>
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
                <a className="nav-link active text-light " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-light" href="#">
                  Movies
                </a>
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
              <div className="d-flex align-items-center ms-5 ">
                <img
                  src={userImage}
                  className="img-thumbnail rounded-circle border-dark me-2 "
                  alt="User"
                  style={{ width: '50px', height: '50px', backgroundColor: 'black', padding:'0px' }}
                />
                <div>
                  <p className="m-0 fw-bold text-light">John Glich</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid text-light text-center d-flex align-items-center justify-content-center" style={{ height: "666px" }}>
        <div className="row">
          <div className="col-6 col-md-5 px-5" >
            <a
              href="https://player.vimeo.com/external/488076225.hd.mp4?s=9cf4808c4e76c0a9267abb75dbec48bc451a138f&amp;profile_id=175"
              className="glightbox_video"
            >
              <svg
                width="300"
                height="300"
                viewBox="0 0 131 131"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="inner-circle"
                  d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z"
                  fill="rgba(254, 213, 48, 1)"
                ></path>
                <circle
                  className="outer_circle"
                  cx="65.5"
                  cy="65.5"
                  r="64"
                  stroke="grey"
                  style={{
                    strokeWidth: "1px",
                  }}
                ></circle>
                <path
                  className="play"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M60 76V57L77 66.7774L60 76Z"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                ></path>
                <circle
                  className="progress"
                  cx="65.5"
                  cy="65.5"
                  r="64"
                  style={{
                    strokeWidth: "3px",
                    strokeDasharray: "300",
                    strokeLinecap: "square",
                    stroke: "rgba(254, 213, 48, 1)",
                  }}
                ></circle>
              </svg>
            </a>
          </div>
          <div className="col-6 col-md-6 text-start px-5">
            <h1 className="fw-bold" style={{ fontSize: "72px", width: "600px" }}>Find your movies <br></br>here!</h1>
            <p style={{ fontSize: "16px", width: "502px" }}>
              Explore our gallery full of exciting films from all around the
              globe <br></br>only your yor entertainments. No hidden charges or
              disturbing ads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
