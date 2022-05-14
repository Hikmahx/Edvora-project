import React from "react";

const Navbar = () => {
  return (
    <header className="bg-nav-black px-4 sm:px-11 h-20 font-bold text-white flex items-center justify-between">
      <div className="logo">
        <a href="/" className="font-roboto text-4xl">
          Edvora
        </a>
      </div>
      <div id="user" className="flex items-center">
        <div className="user-name">
          <p className="font-inter text-xl mr-6 hidden sm:block">Dhruv Singh</p>
        </div>
        <div className="user-img w-11 h-11">
          <img src="./assets/user.png" alt="user-icon" className="w-full" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
