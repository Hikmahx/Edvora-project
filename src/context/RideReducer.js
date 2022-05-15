const RideReducer = (state, action) => {
  switch (action.type) {
    case "GET_RIDES":
      return {
        ...state,
        rides: action.payload,
      };
    default:
      return state;
  }
};

export default RideReducer;
