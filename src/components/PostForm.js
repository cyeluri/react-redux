import React, { Component } from 'react'

export default class PostForm extends Component {
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
