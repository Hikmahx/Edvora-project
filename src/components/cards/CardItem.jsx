import React from "react";

const CardItem = ({ride}) => {
  const rideDate = (date)=>{
    return new Date(date).toString().slice(0, 24)
  }

  return (
    <div className="bg-card-black w-full mb-8 lg:mb-3 px-7 py-6 flex flex-col lg:flex-row justify-between max-w-lg lg:max-w-none mx-auto rounded-lg">
      <div className="ride-content flex flex-col lg:flex-row">
        <div className="map">
          <img src={ride.map_url} alt="map" className="w-full" />
        </div>
        <ul className="info py-6 lg:py-0 lg:pl-11 text-card-info-text text-lg">
          <li className="mb-1">Ride Id : {ride.id}</li>
          <li className="mb-1">Origin Station : {ride.origin_station_code}</li>
          <li className="mb-1">
            Station_path : [{ride.station_path.join(", ")}]
          </li>
          <li className="mb-1">Date : {rideDate(ride.date)}</li>
          <li className="mb-1">Distance : {ride.destination_station_code}</li>
        </ul>
      </div>
      <div className="filter-btns font-medium text-xl lg:text-xs text-white flex flex-col lg:flex-row justify-between lg:block">
        <button className="bg-black px-2 py-2 lg:py-1 rounded-2xl lg:mr-4 xl:mr-8 mb-5 lg:mb-0 hover:bg-white transition-all hover:text-black transition-all">
          {ride.city}
        </button>
        <button className="bg-black px-2 py-2 lg:py-1 rounded-2xl hover:bg-white transition-all hover:text-black transition-all">
          {ride.state}
        </button>
      </div>
    </div>
  );
};

export default CardItem;
