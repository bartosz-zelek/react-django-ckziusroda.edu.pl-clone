import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { mailIcon, telephoneIcon } from "../common/icons";
import { menu } from "../common/icons";
import "../../styles/vertical-navbar.css";

export const Header = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      $("#sidebarCollapse").click(function () {
        $(".vertical-nav").toggleClass("hidden");
      });
      $("#sidebarCollapseExit").click(function () {
        $(".vertical-nav").toggleClass("hidden");
      });
    }, 0);
  });

  const handleSearchInputSubmit = (e) => {
    e.preventDefault();
    history.push(`/szukaj/${searchPhrase}`);
  };

  return (
    <>
      {/* NAVBAR FOR <=MEDIUM DEVICES */}
      {/* modeled on https://jsfiddle.net/bootstrapious/ko18ravd */}
      <div className="vertical-nav bg-primary hidden" id="sidebar">
        <div className="py-4 px-3 mb-4 bg-primary">
          <div className="media d-flex align-items-center">
            <ul className="nav flex-column mb-0">
              <li
                className="nav-item mb-4"
                id="sidebarCollapseExit"
                style={{ textAlign: "right" }}
              >
                ❌
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
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
                  Przyjazne linki
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
              <div className="dropdown-divider"></div>
              <li className="nav-item mb-5 mt-5 d-flex justify-content-center">
                <form
                  className="form-inline my-lg-0"
                  onSubmit={(e) => handleSearchInputSubmit(e)}
                >
                  <input
                    className="form-control mr-sm-2 border border-secondary rounded pl-3 pr-3 bg-light"
                    type="search"
                    placeholder="Szukaj 🔎"
                    aria-label="Search"
                    onChange={(e) => setSearchPhrase(e.target.value)}
                  ></input>
                </form>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
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
                  <Link to="/posty/dokumenty-szkolne" className="dropdown-item">
                    DOKUMENTY SZKOLNE
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/posty/historia" className="dropdown-item">
                    HISTORIA
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/posty/patron" className="dropdown-item">
                    PATRON
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/posty/hymn" className="dropdown-item">
                    HYMN
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/posty/kadra" className="dropdown-item">
                    KADRA
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/posty/losy-absolwentow" className="dropdown-item">
                    LOSY ABSOLWENTÓW
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/posty/monitoring" className="dropdown-item">
                    MONITORING
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/posty/rodo" className="dropdown-item">
                    RODO
                  </Link>
                </div>
              </li>
              <div className="dropdown-divider"></div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
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
                  <Link className="dropdown-item" to="/posty/wydarzenia">
                    WYDARZENIA
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/zawody-sportowe">
                    ZAWODY SPORTOWE
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/konkursy">
                    KONKURSY
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/tydzien-kultury">
                    TYDZIEŃ KULTURY
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/osiagniecia">
                    OSIĄGNIĘCIA
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/ankiety">
                    ANKIETY
                  </Link>
                </div>
              </li>
              <div className="dropdown-divider"></div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
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
                  <Link className="dropdown-item" to="/posty/biblioteka/">
                    BIBLIOTEKA
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/posty/szkolna-akademia-filmowa"
                  >
                    SZKOLNA AKADEMIA FILMOWA
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/posty/klub-szkol-im-h-cegielskiego"
                  >
                    KLUB SZKÓŁ IM. H. CEGIELSKIEGO
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/wolontariat">
                    WOLONTARIAT
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/klasy-policyjne">
                    KLASY POLICYJNE
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/samorzad-szkolny">
                    SAMORZĄD SZKOLNY
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/eko-szkola">
                    EKO SZKOŁA
                  </Link>
                </div>
              </li>
              <div className="dropdown-divider"></div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
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
                  <Link className="dropdown-item" to="/posty/nasi-pracodawcy">
                    NASI PRACODAWCY
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/posty/szkoly-partnerskie"
                  >
                    SZKOŁY PARTNERSKIE
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/nasi-partnerzy">
                    NASI PARTNERZY
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/oferty-pracy">
                    OFERTY PRACY
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/posty/monitoring" className="dropdown-item">
                    MONITORING
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/posty/rodo" className="dropdown-item">
                    RODO
                  </Link>
                </div>
              </li>
              <div className="dropdown-divider"></div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
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
                  <Link
                    className="dropdown-item"
                    to="/posty/czas-zawodowcow-bis"
                  >
                    CZAS ZAWODOWCÓW BIS
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/posty/efektywne-doradztwo"
                  >
                    EFEKTYWNE DORADZTWO
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/posty/erasmus">
                    ERASMUS+
                  </Link>
                </div>
              </li>
              <div className="dropdown-divider"></div>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  style={{
                    textDecoration: "none",
                  }}
                  to="/posty/kontakt"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  KONTAKT
                </Link>
              </li>
              <div className="dropdown-divider mb-5"></div>
              <li className="nav-item mb-2">
                📧
                <a
                  href="mailto:sekretariat@ckziusroda.edu.pl"
                  style={{ textDecoration: "none" }}
                  className="text-light ml-2"
                >
                  sekretariat@ckziusroda.edu.pl
                </a>
              </li>
              <li className="nav-item">
                📞
                <a
                  href="tel:612222444"
                  style={{ textDecoration: "none" }}
                  className="text-light ml-2"
                >
                  61 22 22 444
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none">
        <nav className="navbar navbar-expand-lg justify-content-center">
          <ul className="navbar-nav mr-5">
            <li className="nav-item">
              <a href="/">
                <img
                  src="../../static/frontend/pictures/logo.jpg"
                  alt="Logo CKZiU"
                  className="img-fluid"
                />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                id="sidebarCollapse"
                type="button"
                className="btn rounded-pill shadow-sm px-4 bg-primary"
              >
                {menu}
                <small className="text-light ml-1">Menu</small>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* NAVBAR FOR >=LARGE DEVICES */}
      <div className="d-none d-lg-block">
        <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-around">
          <ul className="navbar-nav mr-5">
            <li className="nav-item">
              {/* {mailIcon} */}
              📧
              <a
                href="mailto:sekretariat@ckziusroda.edu.pl"
                style={{ textDecoration: "none" }}
                className="text-light ml-2"
              >
                sekretariat@ckziusroda.edu.pl
              </a>
              <span className="border-left ml-3 mr-3"></span>
              {/* {telephoneIcon} */}
              📞
              <a
                href="tel:612222444"
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
                Przyjazne linki
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
              <Link to="/">
                <img
                  src="../../static/frontend/pictures/logo.jpg"
                  alt="Logo CKZiU"
                  className="img-fluid"
                />
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-5">
            <li className="nav-item">
              <form
                className="form-inline my-lg-0"
                onSubmit={(e) => handleSearchInputSubmit(e)}
              >
                <input
                  className="form-control mr-sm-2 border border-secondary rounded pl-3 pr-3"
                  type="search"
                  placeholder="Szukaj 🔎"
                  aria-label="Search"
                  value={searchPhrase}
                  onChange={(e) => setSearchPhrase(e.target.value)}
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
                <Link to="/posty/dokumenty-szkolne" className="dropdown-item">
                  DOKUMENTY SZKOLNE
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/posty/historia" className="dropdown-item">
                  HISTORIA
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/posty/patron" className="dropdown-item">
                  PATRON
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/posty/hymn" className="dropdown-item">
                  HYMN
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/posty/kadra" className="dropdown-item">
                  KADRA
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/posty/losy-absolwentow" className="dropdown-item">
                  LOSY ABSOLWENTÓW
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/posty/monitoring" className="dropdown-item">
                  MONITORING
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/posty/rodo" className="dropdown-item">
                  RODO
                </Link>
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
                <Link className="dropdown-item" to="/posty/wydarzenia">
                  WYDARZENIA
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/zawody-sportowe">
                  ZAWODY SPORTOWE
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/konkursy">
                  KONKURSY
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/tydzien-kultury">
                  TYDZIEŃ KULTURY
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/osiagniecia">
                  OSIĄGNIĘCIA
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/ankiety">
                  ANKIETY
                </Link>
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
                <Link className="dropdown-item" to="/posty/biblioteka/">
                  BIBLIOTEKA
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  className="dropdown-item"
                  to="/posty/szkolna-akademia-filmowa"
                >
                  SZKOLNA AKADEMIA FILMOWA
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  className="dropdown-item"
                  to="/posty/klub-szkol-im-h-cegielskiego"
                >
                  KLUB SZKÓŁ IM. H. CEGIELSKIEGO
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/wolontariat">
                  WOLONTARIAT
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/klasy-policyjne">
                  KLASY POLICYJNE
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/samorzad-szkolny">
                  SAMORZĄD SZKOLNY
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/eko-szkola">
                  EKO SZKOŁA
                </Link>
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
                <Link className="dropdown-item" to="/posty/nasi-pracodawcy">
                  NASI PRACODAWCY
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/szkoly-partnerskie">
                  SZKOŁY PARTNERSKIE
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/nasi-partnerzy">
                  NASI PARTNERZY
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/oferty-pracy">
                  OFERTY PRACY
                </Link>
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
                <Link className="dropdown-item" to="/posty/czas-zawodowcow-bis">
                  CZAS ZAWODOWCÓW BIS
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/efektywne-doradztwo">
                  EFEKTYWNE DORADZTWO
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/posty/erasmus">
                  ERASMUS+
                </Link>
              </div>
            </li>
            <div className="pr-3"></div>
            <li className="nav-item">
              <Link
                className="nav-link text-light font-weight-bold"
                style={{
                  textDecoration: "none",
                }}
                to="/posty/kontakt"
              >
                KONTAKT
              </Link>
            </li>
          </ul>
          <ul></ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
