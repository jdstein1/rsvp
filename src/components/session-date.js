// import PropTypes from "prop-types"
import React from "react"
import SessionAppointment from "./session-appointment";
import "./session-date.css"

const SessionDate = (props) => {

  return (<li className={'session-date'}>
    <h3>{props.date}</h3>
    <h4>Appointments:</h4>
    <ul className={'list-appointments'}>
      {props.appointments.map( (appt, i) => <SessionAppointment key={i} appt={appt} />)}
    </ul>
  </li>);
};

export default SessionDate;