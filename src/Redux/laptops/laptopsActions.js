import axios from "axios";

const fetchLaptopsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST_LAPTOPS",
  };
};

const fetchLaptopsSuccess = (laptops) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS_LAPTOPS",
    payload: laptops,
  };
};

const fetchLaptopsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE_LAPTOPS",
    payload: error,
  };
};

export const fetchLaptops = () => {
  return (dispatch) => {
    dispatch(fetchLaptopsRequest());
    axios
      .get("https://dummyjson.com/products/category/laptops")
      .then((response) => {
        const laptops = response.data;
        dispatch(fetchLaptopsSuccess(laptops));
      })
      .catch((error) => {
        const errprMsg = error.message;
        dispatch(fetchLaptopsFailure(errprMsg));
      });
  };
};
