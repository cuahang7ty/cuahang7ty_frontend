import { combineReducers } from 'redux'

import ProductReducer from './product-reducer'

export default combineReducers({
    productReducer: ProductReducer,
})