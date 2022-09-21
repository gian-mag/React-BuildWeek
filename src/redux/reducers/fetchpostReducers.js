import {GET_POSTS} from "../actions"


const initialState = {
    posts: [],
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_POSTS:
        return {
          ...state,
          posts: action.payload.slice(200,250), 
        }

      default:
        return state
    }
  }
  
  export default postsReducer