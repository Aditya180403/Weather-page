import Header from "./Components/Header.jsx";
import { UilSearch, UilBars, UilSun, UilMoon } from "@iconscout/react-unicons";
import { UilCloudSunRainAlt } from "@iconscout/react-unicons";
import BigCity from "./Components/BigCity.jsx";
import DailyForecast from "./Components/DailyForecast.jsx";
import Days from "./Components/Days.jsx";
import DateTime from "./Components/DateTime.jsx";

function App() {
  return (
    <div
      className="mx-auto max-w-screen  py-4 px-8 
     bg-gradient-to-br from-black to-gray-900
     shadow-xl h-auto
   "
    >
      <Header />
      <BigCity />
      <DateTime />
      <DailyForecast title="DAILY FORECAST" />
      <DailyForecast title="HOURLY FORECAST" />
      

      <div>
        <h1 className="text-white text-3xl">Global Map</h1>
      </div>
    </div>
  );
}

export default App;
