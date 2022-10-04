import { combineReducers } from 'redux'
import laptopsReducer from './laptops/laptopsReducer'
import shirtsReducer from './shirts/shirtsReducer';
import jewelleryReducer from './jewellery/jewelleryReducer';
import productsReducer from './products/productsReducer';
import detailseReducer from './detailsProducts/detailsReducer';
import cartReducer from './cart/cartReducer'

const rootReducer = combineReducers({
    laptopsState: laptopsReducer,
    shirtsState: shirtsReducer,
    jewelleryState: jewelleryReducer,
    productsState: productsReducer,
    detailsState: detailseReducer,
    cartState: cartReducer,
})

export default rootReducer;