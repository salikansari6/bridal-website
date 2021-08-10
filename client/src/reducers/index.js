import {combineReducers} from 'redux'
import filterReducer from './filterReducer'
import historyReducer from './historyReducer'
import cartReducer from './cartReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
    filteredItems:filterReducer,
    historyItems:historyReducer,
    cartItems: cartReducer,
    products: productReducer})
    


export default rootReducer