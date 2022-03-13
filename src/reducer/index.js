import { combineReducers } from 'redux'

import ProductReducer from './product-reducer'
import CustomerReducer from './customer-reducer'
import AlertReducer from './alert-reducer'
import KeywordReducer from './keyword-reducer'
import SearcherReducer from './searcher-reducer'
import CartReducer from './cart-reducer'

export default combineReducers({
    productReducer: ProductReducer,
    customerReducer: CustomerReducer,
    keywordReducer: KeywordReducer,
    searcherReducer: SearcherReducer,
    cartReducer: CartReducer
})