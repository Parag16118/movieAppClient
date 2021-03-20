import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaImdb, FaReact } from "react-icons/fa";

function Nav() {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-dark mb-3">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand text-white text-lg">
              Movies App
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <FaReact color="#00d8ff" size="50" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <FaImdb color="#f5de50" size="50" />
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Nav;
