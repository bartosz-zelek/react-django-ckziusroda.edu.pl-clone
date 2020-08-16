import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsByCategory } from "../../actions/posts_by_category";

import renderHTML from "react-render-html";

export class PostsByCategory extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    this.props.getPostsByCategory(params.category_slug);
  }

  render() {
    return <div>XD</div>;
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { getPostsByCategory })(
  PostsByCategory
);
