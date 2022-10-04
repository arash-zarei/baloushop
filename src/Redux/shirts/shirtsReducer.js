const initialState = {
    loading: false,
    products: [],
    error: "",
  };
  
  const shirtsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS_REQUEST_SHIRTS":
        return {
          ...state,
          loading: true,
        };
  
      case "FETCH_PRODUCTS_SUCCESS_SHIRTS":
        return {
          loading: false,
          products: action.payload,
        };
  
      case "FETCH_PRODUCTS_FAILURE_SHIRTS":
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default shirtsReducer;
  