import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-light text-center mt-5">
        <div className="p-4">
          <div className="d-flex justify-content-center">
            <div className="w-25 mr-4" style={{ minWidth: "120px" }}>
              Archwium
              <br />
              <br />
              <select className="form-control bg-light">
                <option>Small select</option>
              </select>
            </div>
            <div className="mt-3 w-25" style={{ minWidth: "140px" }}>
              <a href="http://info-omer.home.pl/ckziusroda/">
                Stara strona CKZiU
              </a>
              <br />
              <br />
              <a href="http://info-omer.home.pl/ckziusroda/archiwum/">
                Archiwum WWW
              </a>
            </div>
            <div className="mt-3 w-25" style={{ minWidth: "140px" }}>
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
            Wszelkie prawa zastrzeżone &copy; CKZiU Środa Wielkopolska.
            Stworzył: <a href="https://github.com/bartox7777/">bartox;</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
