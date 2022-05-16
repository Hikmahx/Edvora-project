const RideReducer = (state, action) => {
  switch (action.type) {
    case "GET_RIDES":
      return {
        ...state,
        rides: action.payload,
        error: false,
      };
    case "GET_FILTER_RIDES":
      return {
        ...state,
        filterRides: action.payload,
      };
    case "GET_STATES":
      return {
        ...state,
        states: Array.from(new Set(action.payload)),
      };
    case "GET_CITIES":
      return {
        ...state,
        cities: Array.from(new Set(action.payload)),
      };
    case "SET_CITY":
      return {
        ...state,
        filterCity: action.payload,
      };
    case "SET_STATE":
      return {
        ...state,
        filterState: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};

export default RideReducer;
