import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../redux/actions/postActions';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    console.log("Posts ")
    console.log(postItems)
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.prototypes = {
  fetchPosts: PropTypes.func.isRquired,
  posts: PropTypes.array.isRquired,
  newPost: PropTypes.func.isRquired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.newPost.item
});

export default connect(mapStateToProps,{ fetchPosts })(Posts);
