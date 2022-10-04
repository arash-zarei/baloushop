const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  
  const detailseReducer = (state=initialState, action) => {
      switch(action.type){
          case "FETCH_DETAILS_REQUEST":
              return {
                  ...state,
                  loading: true,
              }
  
          case "FETCH_DETAILS_SUCCESS":
              return {
                  loading: false,
                  details: action.payload
              }
  
          case "FETCH_DETAILS_FAILUER":
              return {
                  loading: false,
                  error: action.payload
              }
  
          default:
              return state
      }
  }
  
  export default detailseReducer;