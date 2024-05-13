import React from "react";

function Footer() {
  return (
    <footer className="container-fluid d-flex" style={{ paddingLeft: "0px", height: "560px" }} >
      <div className="row">
        <div className="col-md-4 d-flex align-items-center " style={{ background: "#3D3D3D" }}>
          <div className="p-5 m-5 d-flex flex-column align-self-stretch justify-content-between">
            <h1 className="text-light" style={{ fontSize: "64px", fontWeight: "500", lineHeight: "88px" }}>PcariMovie</h1>
            <p className="text-light" style={{ fontSize: "16px", lineHeight: "32px" }}>
              Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed
              do eiusmod tempor incididunt ut labore et.
            </p>
            <h5 className=" text-light">Join Newsletters</h5>
            <div className="position-relative">
              <input
                type="email"
                className="form-control me-2 text-light border-dark p-2 "
                style={{ backgroundColor: "#525252", width: "200px" }}
                placeholder="Enter email"
              />
              <button
                type="submit"
                className="btn"
                style={{
                  position: "absolute",
                  right: "120px",
                  top: "-1px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="yellow"
                  className="bi bi-arrow-right-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8 d-flex align-items-center " style={{ background: "#2E2E2E" }}>
          <div className="row m-5 d-flex align-self-stretch justify-content-between align-items-center">
            <div className="col text-center ">
              <a
                href="#"
                className="mb-3 d-block text-light"
                style={{ textDecoration: "none" }}
              >
                Product
              </a>
              <a
                href="#"
                className="mb-3 text-secondary d-block"
                style={{ textDecoration: "none" }}
              >
                Movies
              </a>
              <a
                href="#"
                className="mb-3 text-secondary d-block"
                style={{ textDecoration: "none" }}
              >
                TV Show
              </a>
              <a
                href="#"
                className="mb-3 text-secondary d-block"
                style={{ textDecoration: "none" }}
              >
                Videos
              </a>
            </div>
            <div className="col text-center">
              <a
                href="#"
                className="mb-3 d-block text-light"
                style={{ textDecoration: "none" }}
              >
                Media Group
              </a>
              <a
                href="#"
                className="mb-3 text-secondary d-block"
                style={{ textDecoration: "none" }}
              >
                Nice Studio
              </a>
              <a
                href="#"
                className="mb-3 text-secondary d-block"
                style={{ textDecoration: "none" }}
              >
                Nice News
              </a>
              <a
                href="#"
                className="mb-3 text-secondary d-block"
                style={{ textDecoration: "none" }}
              >
                Nice TV
              </a>
            </div>
            <div className="col text-center">
              <a
                href="#"
                className="mb-3 d-block text-light"
                style={{ textDecoration: "none" }}
              >
                Sitemap
              </a>
              <a
                href="#"
                className="mb-3 text-secondary d-block"
                style={{ textDecoration: "none" }}
              >
                About
              </a>
              <a
                href="#"
                className="mb-3 text-secondary d-block"
                style={{ textDecoration: "none" }}
              >
                Careers
              </a>
              <a
                href="#"
                className="mb-3 text-secondary d-block"
                style={{ textDecoration: "none" }}
              >
                Press
              </a>
            </div>
            <div className="col-12  d-flex justify-content-around ">
              <div className="d-flex align-items-center text-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                8819 Ohio St. South Gate, California 90280
              </div>
              <div className="d-flex align-items-center text-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                ourstudio@hello.com
              </div>
              <div className="d-flex align-items-center text-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
                +271 386-647-3637
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
