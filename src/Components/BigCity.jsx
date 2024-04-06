import React from "react";

const BigCity = () => {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "London",
    },
    {
      id: 4,
      title: "California",
    },
    {
      id: 5,
      title: "Delhi",
    },
  ];
  return (
    <div className="flex justify-center py-7">
      <div className="w-1/2 h-10 flex place-content-around justify-center items-center space-x-20">
        {cities.map((city) => {
          return (
            <button key={city.id} className="text-white w-20 h-10">
              {city.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BigCity;
