import {NEW_POSTS} from './types';

export const newPost = (newPost) => dispatch => {
  console.log('create new post');
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'POST',
    headers : {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  .then(res => res.json())
  .then(newPost => dispatch({
    type: NEW_POSTS, 
    payload: newPost
  }));

}