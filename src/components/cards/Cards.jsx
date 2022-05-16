import React, { useContext } from "react";
import RideContext from "../../context/RideContext";
import CardItem from "./CardItem";

const Cards = () => {
  const { filterRides } = useContext(RideContext);
  return (
    <div className="cards px-4 sm:px-11 pb-8 mt-10 lg:mt-0">
      {filterRides.map((ride, index)=>(
        <CardItem key={index} ride={ride} />

      ))}
    </div>
  );
};

export default Cards;
