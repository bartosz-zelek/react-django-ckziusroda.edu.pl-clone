import React, { Component } from "react";
import { mailIcon, telephoneIcon } from "../common/icons";

export class Header extends Component {
  render() {
    return (
      <div className="d-none d-sm-block">
        <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-around">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* {mailIcon} */}
              📧
              <a
                href="mailto:"
                style={{ textDecoration: "none" }}
                className="text-light ml-2"
              >
                sekretariat@ckziusroda.edu.pl
              </a>
              <span className="border-left ml-3 mr-3"></span>
              {/* {telephoneIcon} */}
              📞
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
                style={{
                  textDecoration: "none",
                }}
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
                  Facebook
                </a>
                <div class="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Instagram
                </a>
                <div class="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Dziennik elektroniczny
                </a>
                <div class="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Powiat Średzki
                </a>
                <div class="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Biuletyn Informacji Publicznej
                </a>
                <div class="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Plan lekcji
                </a>
                <div class="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Zaloguj - administrator
                </a>
              </div>
            </li>
          </ul>
        </nav>

        <nav className="navbar navbar-expand-lg justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <img
                src="https://ckziusroda.edu.pl/wp-content/uploads/2019/10/logo16102019_v1.jpg"
                alt="Logo CKZiU"
                className="img-fluid"
              />
            </li>
          </ul>
          <ul className="navbar-nav ml-5">
            <li className="nav-item dropdown">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2 border border-secondary rounded"
                  type="search"
                  placeholder="Szukaj 🔎"
                  aria-label="Search"
                ></input>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
