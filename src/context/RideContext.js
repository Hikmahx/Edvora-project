import { createContext, useEffect, useReducer, useState } from "react";
import RideReducer from "./RideReducer";

const RideContext = createContext();

export const RideProvider = ({ children }) => {
  const initialState = {
    rides: [],
    states: [],
    cities: []
  };

  const [state, dispatch] = useReducer(RideReducer, initialState);
  const [filterBox, setfilterBox] = useState(false);

  useEffect(() => {
    getRides();
  }, []);

  const toggleFilterBox = () => {
    setfilterBox(!filterBox);
  };

  const getRides = async () => {
    const res = await fetch("https://assessment.api.vweb.app/rides");
    const data = await res.json();

    dispatch({
      type: "GET_RIDES",
      payload: data,
    });
    dispatch({
      type: "GET_STATES",
      payload: data.map((ride) => ride.state).sort(),
    });
    dispatch({
      type: "GET_CITIES",
      payload: data.map((ride) => ride.city).sort(),
    });
  };

  return (
    <RideContext.Provider
      value={{
        filterBox,
        rides: state.rides,
        states: state.states,
        cities: state.cities,
        toggleFilterBox,
      }}
    >
      {children}
    </RideContext.Provider>
  );
};

export default RideContext;
