import React, { useState } from "react";
import WeatherWidget from "./WeatherWidget";
import BeatLoader from "react-spinners/ClipLoader";
import classes from "./Weather.module.css";

function Weather() {
  const [data, setData] = useState({});
  const [dataFlag, setDataFlag] = useState(true);
  let [loading, setLoading] = useState(false);

  const fetchWeatherHandler = async () => {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  };

  const getWeather = async () => {
    try {
      let position = await fetchWeatherHandler(),
        { coords } = position;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}&units=imperial`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Something went wrong");
        })
        .then(data => {
          setData(data);
          setDataFlag(!dataFlag);
          setLoading(!loading);
        })
        .catch(err => console.error(err));
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  return (
    <div className={classes.util}>
      {!loading ? (
        <button
          onClick={() => {
            getWeather();
            setLoading(!loading);
          }}
        >
          Get Weather
        </button>
      ) : (
        dataFlag && <BeatLoader loading={loading} size={75} />
      )}
      {!dataFlag && <WeatherWidget weatherData={data}></WeatherWidget>}
    </div>
  );
}

export default Weather;
