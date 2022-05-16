import { createContext, useEffect, useReducer, useState } from "react";
import RideReducer from "./RideReducer";

const RideContext = createContext();

export const RideProvider = ({ children }) => {
  const initialState = {
    rides: [],
    states: [],
    cities: [],
    filterRides: [],
    filterState: "State",
    filterCity: "City",
  };

  const [state, dispatch] = useReducer(RideReducer, initialState);
  const [filterBox, setfilterBox] = useState(false);

  useEffect(() => {
    getRides();
  }, []);

  useEffect(() => {
    filterValues();
    // eslint-disable-next-line
  }, [state.filterState, state.filterCity]);

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

    dispatch({
      type: "GET_FILTER_RIDES",
      payload: data,
    });
  };

  const filterValues = () => {
    // Check if the select option's value isn't State
    if (state.filterState !== "State") {
      console.log("It is not equal state");
      dispatch({
        type: "GET_FILTER_RIDES",
        // CHECK IF ANY RIDE OF THAT STATE EXISTS
        payload: state.rides.filter((ride) => ride.state === state.filterState),
      });
    }

    // Check if the select option's value isn't City
    if (state.filterCity !== "City") {
      console.log("It is not equal city");
      dispatch({
        type: "GET_FILTER_RIDES",
        // CHECK IF ANY RIDE OF THAT CITY EXISTS
        payload: state.rides.filter((ride) => ride.city === state.filterCity),
      });
    }

    if (state.filterState !== "State" && state.filterCity !== "City") {
      dispatch({
        type: "GET_FILTER_RIDES",
        // CHECK IF ANY RIDE OF THAT STATE & CITY EXISTS
        payload: state.rides.filter((ride) => {
          return (
            ride.state === state.filterState && ride.city === state.filterCity
          );
        }),
      });
    }

    if (state.filterState === "State" && state.filterCity === "City") {
      dispatch({
        type: "GET_FILTER_RIDES",
        // RETURN ALL RIDES IF  BOTH SELECT OPIONS ARE STATE & CITY
        payload: state.rides,
      });
    }
  };

  const filterByStates = (e) => {
    dispatch({
      type: "SET_STATE",
      payload: e.target.value,
    });
    setfilterBox(false)
  };

  const filterByCities = (e) => {
    dispatch({
      type: "SET_CITY",
      payload: e.target.value,
    });
    setfilterBox(false);
  };

  return (
    <RideContext.Provider
      value={{
        filterBox,
        rides: state.rides,
        filterRides: state.filterRides,
        states: state.states,
        cities: state.cities,
        toggleFilterBox,
        filterByStates,
        filterByCities,
      }}
    >
      {children}
    </RideContext.Provider>
  );
};

export default RideContext;
