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
    loading: false,
    errMsg: "",
    error: false,
  };

  const [state, dispatch] = useReducer(RideReducer, initialState);
  const [filterBox, setfilterBox] = useState(false);

  useEffect(() => {
    getRides();
    // eslint-disable-next-line
  }, []); 

  useEffect(() => {
    filterValues();
    // eslint-disable-next-line
  }, [state.filterState, state.filterCity]);

  const toggleFilterBox = () => {
    setfilterBox(!filterBox);
  };

  const getRides = async () => {
    try {
      setLoading();

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
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err.message,
      });
    }
  };

  const filterValues = () => {
    // Check if the select option's value isn't State
    if (state.filterState !== "State") {
      dispatch({
        type: "GET_FILTER_RIDES",
        // CHECK IF ANY RIDE OF THAT STATE EXISTS
        payload: state.rides.filter((ride) => ride.state === state.filterState),
      });
    }

    // Check if the select option's value isn't City
    if (state.filterCity !== "City") {
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
    setfilterBox(false);

    // ENSURE STATE CLICKED REFLECTS ON THE SELECT OPTIONS TAG
    if (e.target.localName === "button") {
      let selectState = document.getElementsByTagName("select")[0];
      selectState.childNodes.forEach((state, index) => {
        if (state.innerText === state.filterState) {
          console.log(index);
          selectState.selectedIndex = index;
        }
      });
    }
  };

  const filterByCities = (e) => {
    dispatch({
      type: "SET_CITY",
      payload: e.target.value,
    });
    setfilterBox(false);

    // ENSURE CITY CLICKED REFLECTS ON THE SELECT OPTIONS TAG
    if (e.target.localName === "button") {
      let selectCity = document.getElementsByTagName("select")[1];
      selectCity.childNodes.forEach((city, index) => {
        if (city.innerText === state.filterCity) {
          console.log(index);
          selectCity.selectedIndex = index;
        }
      });
    }
  };

  // Set loading
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <RideContext.Provider
      value={{
        filterBox,
        rides: state.rides,
        filterRides: state.filterRides,
        states: state.states,
        cities: state.cities,
        loading: state.loading,
        errMsg: state.errMsg,
        error: state.error,
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
