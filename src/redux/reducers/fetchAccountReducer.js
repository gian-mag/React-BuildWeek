import { GET_ACCOUNT } from "../actions"


const initialState = {
    user: {}
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT:
      return {
        ...state,
        user: action.payload, 
      }

    default:
      return state
  }
}

export default accountReducer