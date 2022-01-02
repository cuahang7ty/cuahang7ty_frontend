import { combineReducers } from 'redux'

import ProductReducer from './product-reducer'
import CustomerReducer from './customer-reducer'
import AlertReducer from './alert-reducer'
import KeywordReducer from './keyword-reducer'

export default combineReducers({
    productReducer: ProductReducer,
    customerReducer: CustomerReducer,
    alertReducer: AlertReducer,
    keywordReducer: KeywordReducer
})