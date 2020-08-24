import React from "react";
import SetCalendar from "./SetCalendar";

const EmptyPage = ({ h1, h2 }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <h1>{h1}</h1>
          <br />
          <h2>{h2}</h2>
        </div>
        <div className="col-lg-4 d-flex justify-content-center">
          <div>
            <SetCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyPage;
