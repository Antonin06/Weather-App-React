import React, { useState } from "react";
import "./App.css";
import "./Weather.css";
import Header from "./Component/Header";

const api = {
  key: "2ad44f2aedcff961d781de55927859c8",
  base: "https://api.openweathermap.org/data/2.5/",
};
const Weather = () => {
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState({});
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setCurrent(result);
          setQuery("");
          // console.log(result);
          search2(result);
        });
    }
  };

  const search2 = (result) => {
    // console.log(result);

    fetch(
      `${api.base}onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&exclude=hourly,minutely,current&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        // console.log(result);
      });
  };

  return (
    <>
      <header className="App-header">
        <img src="./logo_transparent.png" className="App-logo" alt="logo"></img>
      </header>
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
              <Header current={current}
                      weather={weather}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
