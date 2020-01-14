// import PropTypes from "prop-types"
import React from 'react';
import './session-appointment.css';

const SessionAppointment = ({ appt }) => {
  console.log(appt);
  
  return (
  <li className={`session-appointment ${appt.location} ${appt.is_full && 'full' }`}>
    <label className='label' htmlFor={`appointment-time-${appt.id}`}>
      <input className='input' name="appointment-time" id={`appointment-time-${appt.id}`} type="radio" value={appt.time} disabled={appt.is_full} />
      <span className='label-text'>{appt.time}</span>
    </label>
    <p><small>location: {appt.location}</small></p>
  </li>
)};

export default SessionAppointment;
