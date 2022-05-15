import React from "react";

const Filter = () => {
  return (
    <div className="filter-box">
      <div class="flex flex-wrap py-6 px-8 bg-filter-black w-56 h-48 rounded-2xl">
        <label class="w-full text-white font-roboto text-filter-text font-light text-xl mb-3">
          Filters
          <hr className="mt-2" />
        </label>
        <div class="relative w-full border-none mb-5 relative">
          <img
            src="./assets/inverted-triangle.svg"
            alt="inverted-triangle"
            className="absolute right-4 top-3"
          />
          <select class="bg-select-black text-white appearance-none border-none inline-block py-2 pl-3 pr-8 rounded leading-tight w-full">
            <option class="pt-6">State</option>
            <option class="">madrid</option>
            <option>madagascar</option>
            <option>tokyo</option>
            <option>morroco</option>
          </select>
        </div>
        <div class="relative w-full border-none">
          <img
            src="./assets/inverted-triangle.svg"
            alt="inverted-triangle"
            className="absolute right-4 top-3"
          />
          <select class="bg-select-black text-white appearance-none border-none inline-block py-2 pl-3 pr-8 rounded leading-tight w-full">
            <option class="pt-6">City</option>
            <option class="">madrid</option>
            <option>madagascar</option>
            <option>tokyo</option>
            <option>morroco</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
