import { configureStore, combineReducers } from '@reduxjs/toolkit'
import accountReducer from '../reducers/fetchAccountReducer'
import experiencestReducer from '../reducers/fetchExperiencesReducers'

const bigReducer = combineReducers({
    account: accountReducer,
    experiences: experiencestReducer
})

const store = configureStore({
    reducer: bigReducer
})

export default store