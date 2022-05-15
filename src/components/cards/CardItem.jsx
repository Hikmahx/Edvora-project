import React from "react";

const CardItem = () => {
  return (
    <div className="bg-card-black w-full mb-8 lg:mb-3 px-7 py-6 flex flex-col lg:flex-row justify-between max-w-lg lg:max-w-none mx-auto rounded-lg">
      <div className="ride-content flex flex-col lg:flex-row">
        <div className="map">
          <img src="./assets/map.png" alt="map" className="w-full" />
        </div>
        <ul className="info py-6 lg:py-0 lg:pl-11 text-card-info-text text-lg">
          <li className="mb-1">Ride Id : 002</li>
          <li className="mb-1">Origin Station : 20</li>
          <li className="mb-1">Station_path : [20, 39, 40, 42, 54, 63, 72, 88, 98]</li>
          <li className="mb-1">Date : 15th Feb 2022 16:33</li>
          <li className="mb-1">Distance : 0</li>
        </ul>
      </div>
      <div className="filter-btns font-medium text-xl lg:text-xs text-white flex flex-col lg:flex-row justify-between lg:block">
          <button className="bg-black px-2 py-2 lg:py-1 rounded-2xl lg:mr-4 xl:mr-8 mb-5 lg:mb-0">City Name</button>
          <button className="bg-black px-2 py-2 lg:py-1 rounded-2xl">State Name</button>
      </div>
    </div>
  );
};

export default CardItem;
