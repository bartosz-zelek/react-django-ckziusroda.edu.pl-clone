import React, { Component } from "react";
// import { mailIcon, telephoneIcon } from "../common/icons";

export class Header extends Component {
  render() {
    return (
      <>
        <div className="d-none d-lg-block">
          <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-around">
            <ul className="navbar-nav mr-5">
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
                  className="nav-link dropdown-toggle text-light border border-light p-3"
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
                  <a
                    className="dropdown-item"
                    href="https://www.facebook.com/Hipolit-CKZiU-%C5%9Aroda-Wielkopolska-218970334911540/"
                  >
                    Facebook
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="https://www.instagram.com/hipolit_sroda_wlkp/?hl=pl"
                  >
                    Instagram
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="https://uonetplus.vulcan.net.pl/powiatsredzki"
                  >
                    Dziennik elektroniczny
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="https://www.powiatsredzki.pl/powiatsredzki/"
                  >
                    Powiat Średzki
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="https://bip.powiatsredzki.pl/powiatsredzki/bip.html"
                  >
                    Biuletyn Informacji Publicznej
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="https://ckziusroda.edu.pl/plan/index.html"
                  >
                    Plan lekcji
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/admin">
                    Zaloguj - administrator
                  </a>
                </div>
              </li>
            </ul>
          </nav>

          <nav className="navbar navbar-expand-lg justify-content-center">
            <ul className="navbar-nav mr-5">
              <li className="nav-item">
                <a href="/">
                  <img
                    src="https://ckziusroda.edu.pl/wp-content/uploads/2019/10/logo16102019_v1.jpg"
                    alt="Logo CKZiU"
                    className="img-fluid"
                  />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-5">
              <li className="nav-item dropdown">
                <form className="form-inline my-lg-0">
                  <input
                    className="form-control mr-sm-2 border border-secondary rounded pl-3 pr-3"
                    type="search"
                    placeholder="Szukaj 🔎"
                    aria-label="Search"
                  ></input>
                </form>
              </li>
            </ul>
          </nav>

          <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-around">
            <ul className="navbar-nav ml-5">
              <li
                className="nav-item dropdown"
                onMouseOver={() => $(".hoverDropdown1").dropdown("show")}
                onMouseLeave={() => $(".hoverDropdown1").dropdown("hide")}
              >
                <a
                  className="nav-link text-light hoverDropdown1 font-weight-bold"
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
                  O SZKOLE
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    DOKUMENTY SZKOLNE
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    HISTORIA
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    PATRON
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    HYMN
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    KADRA
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    LOSY ABSOLWENTÓW
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    MONITORING
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    RODO
                  </a>
                </div>
              </li>
              <div className="pr-4"></div>
              <li
                className="nav-item dropdown"
                onMouseOver={() => $(".hoverDropdown2").dropdown("show")}
                onMouseLeave={() => $(".hoverDropdown2").dropdown("hide")}
              >
                <a
                  className="nav-link text-light hoverDropdown2 font-weight-bold"
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
                  ŻYCIE SZKOŁY
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    WYDARZENIA
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    ZAWODY SPORTOWE
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    KONKURSY
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    TYDZIEŃ KULTURY
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    OSIĄGNIĘCIA
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    ANKIETY
                  </a>
                </div>
              </li>
              <div className="pr-3"></div>
              <li
                className="nav-item dropdown"
                onMouseOver={() => $(".hoverDropdown3").dropdown("show")}
                onMouseLeave={() => $(".hoverDropdown3").dropdown("hide")}
              >
                <a
                  className="nav-link text-light hoverDropdown3 font-weight-bold"
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
                  DZIAŁALNOŚĆ
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    BIBLIOTEKA
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    SZKOLNA AKADEMIA FILMOWA
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    KLUB SZKÓŁ IM. H. CEGIELSKIEGO
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    WOLONTARIAT
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    KLASY POLICYJNE
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    SAMORZĄD SZKOLNY
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    EKO SZKOŁA
                  </a>
                </div>
              </li>
              <div className="pr-3"></div>
              <li
                className="nav-item dropdown"
                onMouseOver={() => $(".hoverDropdown4").dropdown("show")}
                onMouseLeave={() => $(".hoverDropdown4").dropdown("hide")}
              >
                <a
                  className="nav-link text-light hoverDropdown4 font-weight-bold"
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
                  WSPÓŁPRACA
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    NASI PRACOWNICY
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    SZKOŁY PARTNERSKIE
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    NASI PARTNERZY
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    OFERTY PRACY
                  </a>
                </div>
              </li>
              <div className="pr-3"></div>
              <li
                className="nav-item dropdown"
                onMouseOver={() => $(".hoverDropdown5").dropdown("show")}
                onMouseLeave={() => $(".hoverDropdown5").dropdown("hide")}
              >
                <a
                  className="nav-link text-light hoverDropdown5 font-weight-bold"
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
                  PROJEKTY
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    CZAS ZAWODOWCÓW BIS
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    EFEKTYWNE DORADZTWO
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    ERASMUMS+
                  </a>
                </div>
              </li>
              <div className="pr-3"></div>
              <li class="nav-item">
                <a
                  className="nav-link text-light font-weight-bold"
                  style={{
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  KONTAKT
                </a>
              </li>
            </ul>
            <ul></ul>
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
