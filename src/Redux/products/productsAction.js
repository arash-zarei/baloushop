import axios from "axios";

const fetchProductsRequest = () => {
    return {
        type: "FETCH_PRODUCTS_REQUEST"
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: products
    }
}
const fetchProductsFailuer = (error) => {
    return {
        type: "FETCH_PRODUCTS_FAILUER",
        payload: error
    }
}
export const fetchProducts = (apiURL) => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios.get(apiURL)
        .then(response => {
            const products = response.data
            dispatch(fetchProductsSuccess(products))
        })
        .catch(error => {
            const errorMSG = error.message
            dispatch(fetchProductsFailuer(errorMSG))
        })
    }
}