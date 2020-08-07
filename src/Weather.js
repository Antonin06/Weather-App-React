import React, { useState } from 'react';
import './App.css';
import './Weather.css';

const api = {
  key: "2ad44f2aedcff961d781de55927859c8",
  base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
    }

  const dateBuilder = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`
    }

  return (

    <div className="row">
      <div className="col s12 m6 push-m3">
        <div className="weather card blue-grey darken-1">
          <div className="card-content white-text">
          <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
            <span className="card-title">{weather.name}</span>
            <p><img src="../sun.svg"></img></p>
            <span className="temperature">{Math.round(weather.main)}</span>
          <div className="wind">Vent 1km/h (360°)</div>
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


  )}
  export default Weather;
