import React, { useEffect } from "react";

import Banner from "./Banner";
import BlocksZones from "./BlocksZones";
import News from "./News";

const MainPage = () => {
  window.document.title = "CKZiU – Środa Wielkopolska";

  useEffect(() => {
    setTimeout(() => {
      $("html, body").animate({ scrollTop: 0 }, "fast");
      $(".vertical-nav").addClass("hidden");
    }, 0);
  }, []);

  return (
    <>
      <Banner />
      <div className="container">
        <BlocksZones />
        <News />
      </div>
    </>
  );
};

export default MainPage;
