import { combineReducers } from 'redux';
import postReducer from './postReducer';
import postFormReducer from './postFormReducer';

export default combineReducers({
  posts: postReducer,
  newPost: postFormReducer
});