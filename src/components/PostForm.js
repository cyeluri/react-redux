import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {newPost} from '../redux/actions/postFormActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      comment: ''
    }
  }

  onChange = (e) =>{
    this.setState({
    [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.comment
    }
    this.props.newPost(post);
/*    fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method : 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(post)
      }
    ).then(
      res => res.json()
    ).then(
      data => console.log(data)
    );
*/    
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit = {this.onSubmit}>
          <div>
            <label>Title :</label><br/>
            <input type = 'text' name="title" value={this.state.title} onChange = {this.onChange}></input>
          </div>
          <div>
            <label>Comment :</label><br/>
            <textarea name="comment" value={this.state.comment}  onChange = {this.onChange}></textarea>
          </div>
          <button type="submit" name="Submit" onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.prototypes = {
  newPost: PropTypes.func.isRquired,
  post: PropTypes.object.isRquired
}

const mapStateToProps = state => ({
  post: state.newPost.item
});

export default connect(mapStateToProps,{ newPost })(PostForm);
