const initialState = {
    loading: false,
    products: [],
    error: "",
  };
  
  const jewelleryReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS_REQUEST_JEWELLERY":
        return {
          ...state,
          loading: true,
        };
  
      case "FETCH_PRODUCTS_SUCCESS_JEWELLERY":
        return {
          loading: false,
          products: action.payload,
        };
  
      case "FETCH_PRODUCTS_FAILURE_JEWELLERY":
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default jewelleryReducer;
  