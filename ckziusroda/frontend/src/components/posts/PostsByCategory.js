import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsByCategory } from "../../actions/posts_by_category";

import Link from "react-router-dom";

import renderHTML from "react-render-html";

export class PostsByCategory extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    this.props.getPostsByCategory(params.category_slug);
  }

  render() {
    if (this.props.posts.length > 0) {
      document.title = this.props.posts[0].category_name + " - CKZiU";
      return (
        <div className="container mt-5">
          <h1 className="mb-5">
            Kategoria: {this.props.posts[0].category_name}
          </h1>
          {this.props.posts.map((post) => (
            <div key={post.id} className="border-bottom mb-5">
              <h2>{post.title}</h2>
              <span className="text-muted">
                📅 {post.created_date} {"\u00A0"} 🙍‍♂️
                {post.owner_fullname}
              </span>
              <div style={{ textAlign: "justify" }} className="mt-4">
                {renderHTML(post.markdown_content)}
              </div>
              <button className="btn btn-primary mb-3">CZYTAJ WIĘCEJ...</button>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Ups...</h1>
          <span style={{ textAlign: "center" }}>Ta kategoria jest pusta.</span>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { getPostsByCategory })(
  PostsByCategory
);
