import React from 'react';
import '../App.css';
import '../Weather.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Days from './Days';
import IconsTable from './WeatherIcons';



const Header = (props) => {
  if (props.weather.daily) {


    var d24 = new Date(props.weather.daily[1].dt * 1000);
    var d48 = new Date(props.weather.daily[2].dt * 1000);
    var d72 = new Date(props.weather.daily[3].dt * 1000);
    var d96 = new Date(props.weather.daily[4].dt * 1000);
    var d120 = new Date(props.weather.daily[5].dt * 1000);
    // console.log(d24.getUTCFullYear())
    // console.log(d24.getUTCDate())
    // console.log(d24.getUTCMonth()+1)
  }

  function link() {
    if(d24 && d48 && d72 && d96 && d120){
      return(
        <>
        <Link to="/24h">{d24 && d24.getUTCDate()+"/"}{d24 && d24.getUTCMonth()+1}</Link>
        <Link to="/48h">{d48 && d48.getUTCDate()+"/"}{d48 && d48.getUTCMonth()+1}</Link>
        <Link to="/72h">{d72 && d72.getUTCDate()+"/"}{d72 && d72.getUTCMonth()+1}</Link>
        <Link to="/96h">{d96 && d96.getUTCDate()+"/"}{d96 && d96.getUTCMonth()+1}</Link>
        <Link to="/120h">{d120 && d120.getUTCDate()+"/"}{d120 && d120.getUTCMonth()+1}</Link>
        </>
      )}}


  return(
    <Router>
          <>
              <Switch>
              <Route path="/24h">
              <Days name={props.current.name}
                    country={props.current.sys && ", " + props.current.sys?.country}
                    temp={props.weather.daily && (props.weather.daily[1].temp.day -273.5).toFixed(1) }
                    icons={IconsTable[props.weather.daily && props.weather.daily[1].weather[0].id]}
                    wind={props.weather.daily && "Vent " + props.weather.daily[1].wind_speed.toFixed(1) + "km/h"}
                    deg={props.weather.daily && " (" + props.weather.daily[1].wind_deg.toFixed(0) + "°)"}
              />
              </Route>
              <Route path="/48h">
              <Days name={props.current.name}
                    country={props.current.sys && ", " + props.current.sys?.country}
                    temp={props.weather.daily && (props.weather.daily[2].temp.day -273.5).toFixed(1) }
                    icons={IconsTable[props.weather.daily && props.weather.daily[2].weather[0].id]}
                    wind={props.weather.daily && "Vent " + props.weather.daily[2].wind_speed.toFixed(1) + "km/h"}
                    deg={props.weather.daily && " (" + props.weather.daily[2].wind_deg.toFixed(0) + "°)"}
              />
              </Route>
              <Route path="/72h">
              <Days name={props.current.name}
                    country={props.current.sys && ", " + props.current.sys?.country}
                    temp={props.weather.daily && (props.weather.daily[3].temp.day -273.5).toFixed(1) }
                    icons={IconsTable[props.weather.daily && props.weather.daily[3].weather[0].id]}
                    wind={props.weather.daily && "Vent " + props.weather.daily[3].wind_speed.toFixed(1) + "km/h"}
                    deg={props.weather.daily && " (" + props.weather.daily[3].wind_deg.toFixed(0) + "°)"}
              />
              </Route>
              <Route path="/96h">
              <Days name={props.current.name}
                    country={props.current.sys && ", " + props.current.sys?.country}
                    temp={props.weather.daily && (props.weather.daily[4].temp.day -273.5).toFixed(1) }
                    icons={IconsTable[props.weather.daily && props.weather.daily[4].weather[0].id]}
                    wind={props.weather.daily && "Vent " + props.weather.daily[4].wind_speed.toFixed(1) + "km/h"}
                    deg={props.weather.daily && " (" + props.weather.daily[4].wind_deg.toFixed(0) + "°)"}
              />
              </Route>
              <Route path="/120h">
              <Days name={props.current.name}
                    country={props.current.sys && ", " + props.current.sys?.country}
                    temp={props.weather.daily && (props.weather.daily[5].temp.day -273.5).toFixed(1) }
                    icons={IconsTable[props.weather.daily && props.weather.daily[5].weather[0].id]}
                    wind={props.weather.daily && "Vent " + props.weather.daily[5].wind_speed.toFixed(1) + "km/h"}
                    deg={props.weather.daily && " (" + props.weather.daily[5].wind_deg.toFixed(0) + "°)"}
              />
              </Route>

              <Route path="/">
              <Days name={props.current.name}
                    country={props.current.sys && ", " + props.current.sys?.country}
                    temp={props.current.main && props.current.main.temp.toFixed(1)}
                    icons={IconsTable[props.current.weather && props.current.weather[0].id]}
                    wind={props.current.wind && "Vent " + props.current.wind.speed.toFixed(1) + "km/h"}
                    deg={props.current.wind && " (" + props.current.wind.deg.toFixed(0) + "°)"}
              />
              </Route>
            </Switch>

            <div className="card-action">
              <Link to="/">Today</Link>
              {link()}
            </div>
          </>
        </Router>
      );
    }

export default Header;
