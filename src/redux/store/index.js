import { configureStore, combineReducers } from '@reduxjs/toolkit'
import accountReducer from '../reducers/fetchAccountReducer'
import experiencestReducer from '../reducers/fetchExperiencesReducers'
import postReducers from '../reducers/fetchpostReducers'

const bigReducer = combineReducers({
    account: accountReducer,
    experiences: experiencestReducer,
    posts: postReducers
})

const store = configureStore({
    reducer: bigReducer
})

export default store