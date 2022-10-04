import axios from "axios";

const fetchShirtsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST_SHIRTS",
  };
};

const fetchShirtsSuccess = (shirts) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS_SHIRTS",
    payload: shirts,
  };
};

const fetchShirtsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE_SHIRTS",
    payload: error,
  };
};

export const fetchShirts = () => {
  return (dispatch) => {
    dispatch(fetchShirtsRequest());
    axios
      .get("https://dummyjson.com/products/category/mens-shirts")
      .then((response) => {
        const shirts = response.data;
        dispatch(fetchShirtsSuccess(shirts));
      })
      .catch((error) => {
        const errprMsg = error.message;
        dispatch(fetchShirtsFailure(errprMsg));
      });
  };
};
