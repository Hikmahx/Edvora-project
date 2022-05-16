import React, { useContext } from "react";
import RideContext from "../../context/RideContext";
import CardItem from "./CardItem";

const Cards = () => {
  const { filterRides, loading, errMsg, error } = useContext(RideContext);
  return (
    <div className="cards px-4 sm:px-11 pb-8 mt-10 lg:mt-0">
      {!error ? (
        <>
          {loading ? (
            <h2 className="text-white">Loading...</h2>
          ) : (
            <>
              {filterRides.map((ride, index) => (
                <CardItem key={index} ride={ride} />
              ))}
            </>
          )}
        </>
      ) : (
        <>
          <p className="text-center text-white">{errMsg}. Reload page</p>
        </>
      )}
    </div>
  );
};

export default Cards;
