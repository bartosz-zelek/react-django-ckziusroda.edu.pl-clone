import React, { Component } from "react";

export class BlocksZones extends Component {
  render() {
    window.onload = function () {
      function checkSize() {
        var width = $(window).width();
        if (width <= 750) {
          $("#zones").removeClass("position-relative");
        } else {
          $("#zones").addClass("position-relative");
        }
      }
      $(document).ready(checkSize);
      $(window).resize(checkSize);
    };
    return (
      <>
        <div
          id="zones"
          className="row position-relative text-light"
          style={{ top: "-120px" }}
        >
          <div
            className="col-md bg-primary p-5 w-md-25"
            style={{ textAlign: "center" }}
          >
            <img
              src="../../../static/frontend/pictures/uczen_zone.png"
              alt="Uczeń"
              style={{ height: 90 }}
            />
            <div className="mt-4">&nbsp;</div>
            <b>Strefa dla ucznia i rodzica</b>
            <br />
            <span>
              Ubezpieczenie, Podręczniki, Praktyki zawodowe, Egzamin zawodowy,
              LO dla dorosłych, Logowanie do e-Dziennika, Gdzie szukać pomocy?
            </span>
          </div>
          <div
            className="col-md bg-info p-5 w-md-25"
            style={{ textAlign: "center" }}
          >
            <img
              src="../../../static/frontend/pictures/kandydat_zone.png"
              alt="Kandydat"
              style={{ height: 90 }}
            />
            <div className="mt-4">&nbsp;</div>
            <b>Strefa dla kandydata</b>
            <br />
            <br />
            <span>
              Kierunki kształcenia, Rekrutacja, mLegitymacja, Drzwi otwarte,
              Wirtualny spacer, LO dla dorosłych
            </span>
          </div>
          <div
            className="col-md bg-success p-5 w-md-25"
            style={{ textAlign: "center" }}
          >
            <img
              src="../../../static/frontend/pictures/nauczyciel_zone.png"
              alt="Nauczyciel"
              style={{ height: 90 }}
            />
            <div className="mt-4">&nbsp;</div>
            <b>Strefa dla nauczyciela</b>
            <br />
            <span>Dziennik elektroniczny, Plan lekcji</span>
          </div>
          <div
            className="col-md bg-warning p-5 w-md-25"
            style={{ textAlign: "center" }}
          >
            <img
              src="../../../static/frontend/pictures/media_zone.png"
              alt="Media"
              style={{ height: 90 }}
            />
            <div className="mt-4">&nbsp;</div>
            <b>Media</b>
            <br />
            <br />
            <span>Radio, Instagram, Facebook, Wirtualny spacer, Youtube</span>
          </div>
        </div>
      </>
    );
  }
}

export default BlocksZones;
