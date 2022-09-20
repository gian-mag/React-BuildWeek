import { configureStore, combineReducers } from '@reduxjs/toolkit'
import accountReducer from '../reducers/fetchAccountReducer'
import experiencestReducer from '../reducers/fetchEperiencesReducers'

const bigReducer = combineReducers({
    account: accountReducer,
    experiences: experiencestReducer
})

const store = configureStore({
    reducer: bigReducer
})

export default store