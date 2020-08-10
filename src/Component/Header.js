import React from 'react';
import '../App.css';
import '../Weather.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Days from './Days';
import IconsTable from './WeatherIcons';

const Header = (props) => {
  console.log(props.weather.daily)
  return(
    <Router>
          <>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/Lundi">
              <Days name={props.current.name}
                    country={props.current.sys && ", " + props.current.sys?.country}
                    temp={props.current.main && props.current.main.temp.toFixed(1)}
                    icons={IconsTable[props.current.weather && props.current.weather[0].id]}
                    wind={props.current.wind && "Vent " + props.current.wind.speed.toFixed(1) + "km/h"}
                    deg={props.current.wind && " (" + props.current.wind.deg.toFixed(0) + "°)"}
              />
              </Route>

              <Route path="/Mardi">
              <Days name={props.current.name}
                    country={props.current.sys && ", " + props.current.sys?.country}
                    temp={props.current.main && props.current.main.temp.toFixed(1)}
                    icons={IconsTable[props.current.weather && props.current.weather[0].id]}
                    wind={props.current.wind && "Vent " + props.current.wind.speed.toFixed(1) + "km/h"}
                    deg={props.current.wind && " (" + props.current.wind.deg.toFixed(0) + "°)"}
              />
              </Route>

              <Route path="/Mercredi">
              <Days name={props.current.name}
                    country={props.current.sys && ", " + props.current.sys?.country}
                    temp={props.current.main && props.current.main.temp.toFixed(1)}
                    icons={IconsTable[props.current.weather && props.current.weather[0].id]}
                    wind={props.current.wind && "Vent " + props.current.wind.speed.toFixed(1) + "km/h"}
                    deg={props.current.wind && " (" + props.current.wind.deg.toFixed(0) + "°)"}
              />
              </Route>

              <Route path="/Jeudi">
              <Days name={props.current.name}
                    country={props.current.sys && ", " + props.current.sys?.country}
                    temp={props.current.main && props.current.main.temp.toFixed(1)}
                    icons={IconsTable[props.current.weather && props.current.weather[0].id]}
                    wind={props.current.wind && "Vent " + props.current.wind.speed.toFixed(1) + "km/h"}
                    deg={props.current.wind && " (" + props.current.wind.deg.toFixed(0) + "°)"}
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
              <Link to="/Lundi">otto</Link>
              <Link to="/Mardi">Mardi</Link>
              <Link to="/Mercredi">Mercredi</Link>
              <Link to="/Jeudi">Jeudi</Link>
          </div>
          </>
        </Router>
      );
    }


export default Header;
