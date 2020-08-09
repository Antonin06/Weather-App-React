import React, { useState } from "react";
import "./App.css";
import "./Weather.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IconsTable from "./Component/WeatherIcons";

const api = {
  key: "2ad44f2aedcff961d781de55927859c8",
  base: "https://api.openweathermap.org/data/2.5/",
};
const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div className="row">
      <div className="col s12 m6 push-m3">
        <div className="weather card blue-grey darken-1">
          <div className="card-content white-text">
            <div className="search-box">
              <input
                type="text"
                placeholder="Votre Ville..."
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
            </div>
            <span className="card-title">
              {weather.name}
              {weather.sys && ", " + weather.sys?.country}
            </span>
            <p>
              <img
                src={IconsTable[weather.weather && weather.weather[0].id]}
              ></img>
            </p>
            <span className="temperature">
              {weather.main && weather.main.temp.toFixed(1) + "°C"}
            </span>
            <div className="wind">
              {weather.wind && "Vent " + weather.wind.speed.toFixed(1) + "km/h"}
              {weather.wind && " (" + weather.wind.deg.toFixed(0) + "°)"}
            </div>
          </div>
          <div className="card-action">
            <a href="#">Thursday</a>
            <a href="#">Friday</a>
            <a href="#">Saturday</a>
            <a href="#">Sunday</a>
            <a href="#">Monday</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
