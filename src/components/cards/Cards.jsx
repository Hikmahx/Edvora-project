import React, { useContext } from "react";
import RideContext from "../../context/RideContext";
import CardItem from "./CardItem";

const Cards = () => {
  const { rides } = useContext(RideContext);
  return (
    <div className="cards px-4 sm:px-11 pb-8 mt-10 lg:mt-0">
      {rides.map((ride, index)=>(
        <CardItem key={index} ride={ride} />

      ))}
    </div>
  );
};

export default Cards;
