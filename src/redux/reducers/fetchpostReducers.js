import {GET_POSTS} from "../actions"


const initialState = {
    posts: [],
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_POSTS:
        return {
          ...state,
          posts: action.payload.splice(0,200), 
        }

      default:
        return state
    }
  }
  
  export default postsReducer