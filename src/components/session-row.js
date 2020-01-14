// import PropTypes from "prop-types"
import React from "react"
import "./session-row.css"

const SessionRow = ({ past, id, appointment, rsvp }) => {

  // const keysArray = Object.keys(data);
  const styleWrapper = {};
  const styleText = {
    // color: past === 'none' 
    // ? 'black' 
    // : ( past === 'rsvp' 
    //   ? 'red' 
    //   : '#c0c0c0' 
    // )
  };
  const styleAppointment = {
    // display: past === 'appointment' ? 'none' : 'block'
  };
  const styleRSVP = {
    display: (past === 'rsvp' || past === 'appointment') ? 'none' : 'block'
  };

  const message = (past === 'none')
    ? null
    : <li><b>note:</b> date &amp; time of rsvp {(past === 'rsvp')
      ? 'have passed, appointment is upcoming'
      : '& appointment have passed'
    }</li>;

  return (<li style={ styleWrapper }>
    <p><b>date:</b> {appointment['date']}</p>
    <ul className={'status'}>
      <li><b>id:</b> {id}</li>
      {/* <li style={{ ...styleAppointment, ...styleText }}><b>date:</b> {appointment['date']}</li> */}
      <li className={ 'appt' } style={{ ...styleAppointment, ...styleText }}><b>time:</b> {appointment['time']}</li>
      <li className={ 'rsvp' } style={{ ...styleRSVP, ...styleText }}><b>rsvp by:</b> {rsvp['date']}</li>
      {message}
    </ul>
    {/* <ul>{ keysArray.map( (name, j) => {

      if ( name === 'id' || data[name] === 'null' ) return null;
      return (<li key={j}>{name}: {JSON.stringify(data[name])}</li>)

    })}</ul> */}
  </li>);
};

export default SessionRow;