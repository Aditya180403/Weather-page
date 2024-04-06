import React from "react";
import { UilCloudSunRainAlt } from "@iconscout/react-unicons";
import Days from "./Days";

const DailyForecast = ({ title }) => {
  return (
    <div className="text-white  justify-center place-content-between mt-10 ">
      <div className="flex flex-col w-full px-5 ">
        <div className="flex flex-row place-content-left">
          <div className="text-xl text-gray-500">{title}</div>
        </div>
        <hr className="mt-4 w-40 text-gray-500"/> 
        <Days />
      </div>
    </div>
  );
};

export default DailyForecast;
