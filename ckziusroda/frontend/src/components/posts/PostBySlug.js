//TODO:
// if this.props.post.length < 0 return redirect some 404 page
// edit button? or like click eg. F1 to go to admin edit page
// posts on specific anth and year
// upload files
// checking length of posts array is a temporary solution

import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostBySlug } from "../../actions/post_by_slug";

import renderHTML from "react-render-html";

import Calendar from "react-calendar";

export class PostBySlug extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    this.props.getPostBySlug(params.category_slug, params.post_slug);
  }

  state = {
    date: new Date(),
  };

  onChange = (date) => this.setState({ date });

  render() {
    if (this.props.post.length > 0) {
      document.title = this.props.post[0].title + " - CKZiU";
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8">
              {this.props.post.map((post_obj) => (
                <div key={post_obj.id} className="border-bottom mb-5">
                  <h2>{post_obj.title}</h2>
                  <span className="text-muted">
                    📅 {post_obj.created_date} {"\u00A0"} 🙍‍♂️{" "}
                    {post_obj.owner_fullname}
                  </span>
                  <div style={{ textAlign: "justify" }} className="mt-4">
                    {renderHTML(post_obj.markdown_content_full)}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <p>
                      {post_obj.images.map((image) => renderHTML(image.render))}
                    </p>
                    <p>
                      {post_obj.videos.map((video) => renderHTML(video.render))}
                    </p>
                  </div>
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
        <div className="container">
          <h1 style={{ textAlign: "center" }} className="mt-5">
            Ups...
          </h1>
          <span style={{ textAlign: "center" }}>Ten post nie istnieje.</span>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post,
});

export default connect(mapStateToProps, { getPostBySlug })(PostBySlug);
