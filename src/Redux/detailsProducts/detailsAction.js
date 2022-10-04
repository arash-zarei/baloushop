import axios from "axios";

const fetchDetailsRequest = () => {
    return {
        type: "FETCH_DETAILS_REQUEST"
    }
}

const fetchDetailsSuccess = (details) => {
    return {
        type: "FETCH_DETAILS_SUCCESS",
        payload: details
    }
}
const fetchDetailsFailuer = (error) => {
    return {
        type: "FETCH_DETAILS_FAILUER",
        payload: error
    }
}
export const fetchDetails = (id) => {
    return (dispatch) => {
        dispatch(fetchDetailsRequest())
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(response => {
            const details = response.data
            dispatch(fetchDetailsSuccess(details))
        })
        .catch(error => {
            const errorMSG = error.message
            dispatch(fetchDetailsFailuer(errorMSG))
        })
    }
}