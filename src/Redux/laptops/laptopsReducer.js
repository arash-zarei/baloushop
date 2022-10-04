const initialState = {
  loading: false,
  products: [],
  error: "",
};

const laptopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST_LAPTOPS":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_PRODUCTS_SUCCESS_LAPTOPS":
      return {
        loading: false,
        products: action.payload,
      };

    case "FETCH_PRODUCTS_FAILURE_LAPTOPS":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default laptopsReducer;
