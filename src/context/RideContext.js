import { createContext, useReducer, useState } from "react";
import RideReducer from "./RideReducer";

const RideContext = createContext();

export const RideProvider = ({ children }) => {

  const initialState = {
  };

  const [state, dispatch] = useReducer(RideReducer, initialState);
  const [filterBox, setfilterBox] = useState(false);

  const toggleFilterBox = ()=>{
    setfilterBox(!filterBox)
  }


  return (
    <RideContext.Provider
      value={{
        filterBox, 
        toggleFilterBox
      }}
    >
      {children}
    </RideContext.Provider>
  );
};

export default RideContext;
