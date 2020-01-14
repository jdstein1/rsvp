// import PropTypes from "prop-types"
import React from "react"
// import { Link } from "gatsby"

// import utils from "../scripts/utils.js"
import SessionDate from "./session-date";

import "./session-grid.css"

// prepare the data...

// get NOW date/time
// make a date/time obj w many formats
// put NOW date/time obj in state

// compare NOW to RSVP_DEADLINE
// if deadline passed: eject
// else: render the date/time

// const {sessions} = data;

// const fakeNow = "2019-10-16T06:00:00.000-07:00";

/**
 * Create one column per day/date
 * Create many rows in each column for each appointment slot
 */

const SessionGrid = ({uniqueDates, sessions}) => {

  // const now = new Date().toISOString();
  // const nowMS = Date.parse(now);
  // const nowMS = Date.parse(new Date().toISOString() );
  // console.log(nowMS);
  

  return (
    <div>
      <ul className={'session-grid'}>{uniqueDates.map( (date, i) => {

        const appointments = sessions.filter( ( session ) => {
          return date === session.date;
        })

        // const { id, date, starts, rsvp_deadline: deadline } = sessionObj;

        // const startsMS = Date.parse(starts);
        // // console.dir(startsMS);

        // const appointment = utils.createMonster(startsMS);
        // // console.log('appointment: ', appointment);
        
        // const deadlineMS = Date.parse(deadline);
        // // console.dir(deadlineMS);

        // const rsvp = utils.createMonster(deadlineMS);
        // // console.log('rsvp: ', rsvp);

        // let past = 'none';
        
        // if (nowMS > deadlineMS) {
        //   if (nowMS > startsMS) { 
        //     past = 'appointmentStart'; 
        //   } else { 
        //     past = 'rsvpDeadline';
        //   }
        // }

        // if ((now.ms > rsvp.ms) || (now.ms > appointment.ms) ) return null;

        return <SessionDate key={i} date={date} appointments={appointments} />;
        // return <SessionRow key={i} id={id} appointment={appointment} rsvp={rsvp} past={past} />;

      }) }</ul>
    </div>
  );
}

export default SessionGrid;