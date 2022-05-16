import React, { useContext } from "react";
import RideContext from "../context/RideContext";
import Filter from "./Filter";

const TabHeader = () => {
  const { toggleFilterBox } = useContext(RideContext);
  return (
    <div className="my-7 px-4 sm:px-11 flex justify-between items-start md:items-center">
      <div className="tabs-header text-tab-text flex flex-col sm:flex-row font-normal sm:text-lg uppercase lg:normal-case hidden">
        <div className="md:mr-11 mb-4 md:mb-0">
          <h2 className="">Nearest rides</h2>
        </div>
        <div className="md:mr-11 mb-4 md:mb-0">
          <h2 className="">Upcoming rides</h2>
        </div>
        <div className="md:mr-11 mb-4 md:mb-0">
          <h2 className="">Past rides</h2>
        </div>
      </div>
      <div className="filter w-full flex justify-end  relative cursor-pointer">
        <div onClick={toggleFilterBox} className=" flex items-center justify-center">
          <span className="w-4 h-3 mr-2 mt-2 sm:mt-0">
            <img src="./assets/filter.svg" alt="filter-icon" />
          </span>
          <h2 className="text-gray-6 font-medium text-base hidden sm:block">
            Filters
          </h2>
        </div>
      <Filter />
      </div>
    </div>
  );
};

export default TabHeader;
