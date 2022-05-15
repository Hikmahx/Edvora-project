import { createContext, useEffect, useReducer, useState } from "react";
import RideReducer from "./RideReducer";

const RideContext = createContext();

export const RideProvider = ({ children }) => {

  const initialState = {
    rides: []
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
    console.log(data);
    dispatch({
      type: "GET_RIDES", 
      payload: data
    })
  };

  return (
    <RideContext.Provider
      value={{
        filterBox,
        rides: state.rides,
        toggleFilterBox,
      }}
    >
      {children}
    </RideContext.Provider>
  );
};

export default RideContext;
