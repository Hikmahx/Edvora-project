import React, { useContext } from "react";
import RideContext from "../context/RideContext";

const Filter = () => {
  const { states, cities } = useContext(RideContext);

  return (
    <div className="filter-box absolute right-0 top-8">
      <div className="flex flex-wrap py-6 px-8 bg-filter-black w-56 h-48 rounded-2xl">
        <label className="w-full text-white font-roboto text-filter-text font-light text-xl mb-3">
          Filters
          <hr className="mt-2" />
        </label>
        <div className="relative w-full border-none mb-5 relative">
          <img
            src="./assets/inverted-triangle.svg"
            alt="inverted-triangle"
            className="absolute right-4 top-3"
          />
          <select className="bg-select-black text-white appearance-none border-none inline-block py-2 pl-3 pr-8 rounded leading-tight w-full cursor-pointer">
            <option className="pt-6">State</option>
            {states.map((rideState, index) => (
              <option key={index} value={rideState}>
                {rideState}
              </option>
            ))}
          </select>
        </div>
        <div className="relative w-full border-none">
          <img
            src="./assets/inverted-triangle.svg"
            alt="inverted-triangle"
            className="absolute right-4 top-3"
          />
          <select className="bg-select-black text-white appearance-none border-none inline-block py-2 pl-3 pr-8 rounded leading-tight w-full cursor-pointer">
            <option className="pt-6">City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
