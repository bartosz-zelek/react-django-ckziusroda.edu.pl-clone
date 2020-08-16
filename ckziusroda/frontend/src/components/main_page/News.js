import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../../actions/news";

import renderHTML from "react-render-html";

export class News extends Component {
  componentDidMount() {
    this.props.getNews();
  }

  render() {
    return (
      <div className="mt-5">
        <p
          style={{ fontSize: "50px", textAlign: "center", fontWeight: "bold" }}
          className="bg-danger text-light"
        >
          AKTUALNOŚCI
        </p>
        <br />
        <div>
          {this.props.news.map((news_obj) => (
            <div className="border-bottom pb-3" key={news_obj.id}>
              <h1 style={{ textAlign: "center" }} className="mt-5">
                {news_obj.title}
              </h1>
              <div style={{ fontSize: "20px", textAlign: "justify" }}>
                {renderHTML(news_obj.markdown_content)}
              </div>
              <div style={{ textAlign: "center" }}>
                {news_obj.images.map((image) => renderHTML(image.render))}
                {news_obj.videos.map((video) => renderHTML(video.render))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.news.news,
});

export default connect(mapStateToProps, { getNews })(News);
