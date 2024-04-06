import React from "react";
import { UilSearch, UilBars, UilSun, UilMoon } from "@iconscout/react-unicons";

const Header = () => {
  return (
    <div className="flex flex-row  items-center my-2  place-content-between  ">
      <button>
        <UilBars className="text-white" />
      </button>
      <div className="flex flex-row w-1/2 items-center justify-center space-x-4 ">
        <input
          type="text"
          placeholder="Search..."
          className=" font-light py-2 px-2 w-full focus:outline-none capitalize  rounded-full h-10 bg-gray-800 text-white items-center"
        />
        <UilSearch className="absolute top-11 left-3/4 transform -translate-y-1/2 text-white " />
      </div>
      <div className="rounded-full flex flex-row border-white border-solid">
        <button className="flex flex-row ">
          <p className="text-white px-1">C</p>
        </button>
        <p className="text-white">|</p>
        <button className="flex flex-row ">
          <p className="text-white px-1">F</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
