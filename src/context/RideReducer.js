const RideReducer = (state, action) => {
  switch (action.type) {
    case "GET_RIDES":
      return {
        ...state,
        rides: action.payload,
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
    default:
      return state;
  }
};

export default RideReducer;
