import React from "react";
import classes from "./WeatherWidget.module.css";

function WeatherWidget(props) {
  //convert celsius to fahrenheit
  let fahrenheit = (props.weatherData.main.temp * 9) / 5 + 32;

  let temp = fahrenheit.toFixed(0);
  let weather = props.weatherData.weather[0].main;
  let location = props.weatherData.name;

  return (
    <div className={classes.widgetCard}>
      <p className={classes.temp}>{temp + "\u00b0"}</p>
      <p>{weather}</p>
      <p>{location}</p>
    </div>
  );
}

export default WeatherWidget;
