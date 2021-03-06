import React from 'react';
import '../App.css';
import '../Weather.css';

const Days = (props) => {
return(
  <>
  <span className="card-title">
    {props.name}{props.country}
   </span>
   <p><img src={props.icons} alt={props.icons}></img></p>
  <span className="temperature">
    {props.temp}
  </span>
  <div className="wind">
    {props.wind}
    {props.deg}
  </div>
  </>
)

};
export default Days;
