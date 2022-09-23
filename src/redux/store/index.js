import { configureStore, combineReducers } from '@reduxjs/toolkit'
import accountReducer from '../reducers/fetchAccountReducer'

const bigReducer = combineReducers({
    account: accountReducer
})

const store = configureStore({
    reducer: bigReducer
})

export default store