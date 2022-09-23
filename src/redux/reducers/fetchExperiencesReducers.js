import { GET_EXPERIENCES, GET_SINGLE_EXPERIENCE } from "../actions"

const initialState = {
    experiences: [],
    singleExperience: {}
}

const experiencestReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_EXPERIENCES:
        return {
          ...state,
          experiences: action.payload, 
        }
  
        case GET_SINGLE_EXPERIENCE: {
          return {
            ...state,
            singleExperience: action.payload,
          }
        }

      default:
        return state
    }
  }
  
  export default experiencestReducer