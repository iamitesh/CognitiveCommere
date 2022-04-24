import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-blue">
            <div className="container-fluid">
              <Link className="navbar-brand" to="#">
                Navbar
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="./"
                    >
                      Commerce
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sell">
                      Sell
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/community">
                      Comunity
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/develop">
                      Develop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/marketplace">
                      MarketPlace
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/resources">
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
