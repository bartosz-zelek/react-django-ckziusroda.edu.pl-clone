import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../actions/news";

import renderHTML from "react-render-html";

import "../../styles/news.css";

const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, []);
  const news = useSelector((state) => state.news.news);

  return (
    <div className="mt-5">
      <p
        style={{ textAlign: "center", fontWeight: "bold" }}
        className="bg-danger text-light news-title"
      >
        AKTUALNOŚCI
      </p>
      <br />
      <div>
        {news.map((news_obj) => (
          <div className="border-bottom pb-3" key={news_obj.id}>
            <h1 style={{ textAlign: "center" }} className="mt-5">
              {news_obj.title}
            </h1>
            <div style={{ fontSize: "20px", textAlign: "justify" }}>
              {renderHTML(news_obj.markdown_content)}
            </div>
            <div style={{ textAlign: "center" }}>
              <p>{news_obj.images.map((image) => renderHTML(image.render))}</p>
              <p>{news_obj.videos.map((video) => renderHTML(video.render))}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

// const mapStateToProps = (state) => ({
//   news: state.news.news,
// });

// export default connect(mapStateToProps, { getNews })(News);
