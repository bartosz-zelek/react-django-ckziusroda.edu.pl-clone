import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsByCategory } from "../../actions/posts_by_category";

import { Link } from "react-router-dom";

import renderHTML from "react-render-html";

import Calendar from "react-calendar";

export class PostsByCategory extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    this.props.getPostsByCategory(params.category_slug);
  }

  state = {
    date: new Date(),
  };

  onChange = (date) => this.setState({ date });

  render() {
    if (this.props.posts && this.props.posts.length > 0) {
      document.title = this.props.posts[0].category_name + " - CKZiU";
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mb-5">
                Kategoria: {this.props.posts[0].category_name}
              </h1>
              {this.props.posts.map((post) => (
                <div key={post.id} className="border-bottom mb-5">
                  <h2>{post.title}</h2>
                  <span className="text-muted">
                    📅 {post.created_date} {"\u00A0"} 🙍‍♂️ {post.owner_fullname}
                  </span>
                  <div style={{ textAlign: "justify" }} className="mt-4">
                    {renderHTML(post.markdown_content)}
                  </div>
                  <Link
                    className="btn btn-primary mb-3"
                    to={
                      this.props.match.params.category_slug +
                      "/" +
                      post.slug +
                      "/"
                    }
                  >
                    CZYTAJ WIĘCEJ...
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-lg-4 d-flex justify-content-center">
              <div>
                <Calendar onChange={this.onChange} value={this.state.date} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container mt-5">
          <h1 style={{ textAlign: "center" }} className="mt-5">
            Ups...
            <br />
            <span style={{ textAlign: "center", fontSize: "20px" }}>
              Ta kategoria jest pusta.
            </span>
          </h1>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts.posts };
};

export default connect(mapStateToProps, { getPostsByCategory })(
  PostsByCategory
);
