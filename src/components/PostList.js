import React from "react";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    fetchPosts();
  }

  render() {
    return <div>PostList</div>;
  }
}

export default PostList;
