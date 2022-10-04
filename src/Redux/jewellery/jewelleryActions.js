import axios from "axios";

const fetchJewelleryRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST_JEWELLERY",
  };
};

const fetchJewellerySuccess = (jewellery) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS_JEWELLERY",
    payload: jewellery,
  };
};

const fetchJewelleryFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE_JEWELLERY",
    payload: error,
  };
};

export const fetchJewellery = () => {
  return (dispatch) => {
    dispatch(fetchJewelleryRequest());
    axios
      .get("https://dummyjson.com/products/category/womens-jewellery")
      .then((response) => {
        const jewellery = response.data;
        dispatch(fetchJewellerySuccess(jewellery));
      })
      .catch((error) => {
        const errprMsg = error.message;
        dispatch(fetchJewelleryFailure(errprMsg));
      });
  };
};
