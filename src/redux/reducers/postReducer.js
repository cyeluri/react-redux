import {FETCH_POSTS} from '../actions/types'

const initialState = {
  items:[]
}

export default function (state = initialState, action) {
  console.log('Post reducer invoke')
  switch(action.type) {
    case FETCH_POSTS : 
    console.log('Post reducer Fetch')
    return {
      ...state,
      items: action.payload
    };
    
    default : return state;
  }
}