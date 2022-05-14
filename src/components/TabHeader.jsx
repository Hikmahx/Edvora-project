import React from "react";

const TabHeader = () => {
  return (
    <div className="my-7 px-4 sm:px-11 flex justify-between items-start sm:items-center">
      <div className="tabs-header text-tab-text flex font-normal sm:text-lg">
        <div className="mr-11">
          <h2 className="">Nearest rides</h2>
        </div>
        <div className="mr-11">
          <h2 className="">Upcoming rides</h2>
        </div>
        <div className="mr-11">
          <h2 className="">Past rides</h2>
        </div>
      </div>
      <div className="filter flex items-center justify-center">
        <span className="w-4 h-3 mr-2 mt-2 sm:mt-0">
            <img src="./assets/filter.svg" alt="filter-icon" />
        </span>
        <h2 className="text-gray-6 font-medium text-base hidden sm:block">Filters</h2>
      </div>
    </div>
  );
};

export default TabHeader;
