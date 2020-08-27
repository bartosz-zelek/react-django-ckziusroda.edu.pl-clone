import React from "react";
import ArchiveMonths from "./ArchiveMonths";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center mt-5">
      <div className="p-5 container-fluid">
        <div className="d-flex justify-content-center row">
          <div className="col-lg mb-4">
            Archwium
            <br />
            <br />
            <ArchiveMonths />
          </div>
          <div className="mt-3 mb-4 col-lg">
            <a href="http://info-omer.home.pl/ckziusroda/">
              Stara strona CKZiU
            </a>
            <br />
            <br />
            <a href="http://info-omer.home.pl/ckziusroda/archiwum/">
              Archiwum WWW
            </a>
          </div>
          <div className="mt-3 col-lg mb-4">
            <a href="https://www.facebook.com/Hipolit-CKZiU-%C5%9Aroda-Wielkopolska-218970334911540/">
              Facebook
            </a>
            <br />
            <br />
            <a href="https://www.instagram.com/hipolit_sroda_wlkp/?hl=pl">
              Instagram
            </a>
          </div>
        </div>
        <div className="border-top m-5"></div>
        <div>
          Wszelkie prawa zastrzeżone &copy; CKZiU Środa Wielkopolska. Stworzył:{" "}
          <a href="https://github.com/bartox7777/" target="_blank">
            bartox;
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
