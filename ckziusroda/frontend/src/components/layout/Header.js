import React, { Component } from "react";
import { mailIcon, telephoneIcon } from "../common/icons";

export class Header extends Component {
  render() {
    return (
      <div className="d-none d-sm-block">
        <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-around">
          <ul className="navbar-nav">
            <li className="">
              {mailIcon}
              <a
                href="mailto:"
                style={{ textDecoration: "none" }}
                className="text-light ml-2"
              >
                sekretariat@ckziusroda.edu.pl
              </a>
              <span className="border-left ml-3 mr-3"></span>
              {telephoneIcon}
              <a
                href="tel:+"
                style={{ textDecoration: "none" }}
                className="text-light ml-2"
              >
                61 22 22 444
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light border border-light p-2"
                style={{ textDecoration: "none" }}
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Przydatne linki
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
