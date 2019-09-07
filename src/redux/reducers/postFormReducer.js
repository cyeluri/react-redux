import {NEW_POSTS} from '../actions/types'

const initialState = {
  item:{}
}

export default function (state = initialState, action) {
  switch(action) {
    case NEW_POSTS : 
    console.log('post form reducer')
    return {
      ...state,
      item: action.payload
    };
    
    default : return state;
  }
}