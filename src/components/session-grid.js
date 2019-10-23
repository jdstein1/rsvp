import PropTypes from "prop-types"
import React from "react"
// import { Link } from "gatsby"

function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

// get NOW date/time
// make a date/time obj w many formats
// put NOW date/time obj in state

// compare NOW to RSVP_DEADLINE
// if deadline passed: eject
// else: render the date/time

const SessionRow = ({ data }) => {

  // const {} = data;

  const keysArray = Object.keys(data);

  return (<li>id: {JSON.stringify(data.id)}
    <ul>{ keysArray.map( (key, j) => {

      if ( key === 'id' || data[key] === 'null' ) return null;

      return (<li>{key}: {JSON.stringify(data[key])}</li>)

    })}</ul>
  </li>)};

const SessionGrid = ({ sessions, now }) => (
  <div>
    <ul>{ sessions.map( (sessionObj, i) => {

        const { id, starts, rsvp_deadline } = sessionObj;

        const now = {};
        now['ms'] = Date.now();
        // now['utc'] = now['ms'].toUTCString();
        // now['iso'] = parseISOString(now);

        const due = {};
        due['ms'] = rsvp_deadline;
        // due['utc'] = '';
        // due['iso'] = parseISOString(due);

        // const starts = {};

        // var msStarts = parseISOString(starts);
        // var utcStarts = parseISOString(starts);
        // var isoStarts = parseISOString(starts);


        console.log(now);
        // console.log(msNow);

        console.log(due);

        // if ( msNow > msDue ) return null;

        return <SessionRow key={i} data={sessionObj} />;

      }) }</ul>
  </div>
)

SessionGrid.propTypes = {
  sessions: PropTypes.array,
}

SessionGrid.defaultProps = {
  sessions: [
    {
      "id": 22234,
      "starts": "2019-11-01T06:00:00.000-07:00",
      "ends": null,
      "rsvp_deadline": "2019-10-16T06:00:00.000-07:00",
      "capacity": 8,
      "description": "$8175$ IIT - Tower   10 W 35th St.",
      "status": true,
      "unable_to_attend": false,
      "created_at": "2019-09-27T16:00:49.000-07:00",
      "updated_at": "2019-09-27T16:00:49.000-07:00",
      "is_full": false
    },{
      "id": 22235,
      "starts": "2019-11-01T06:00:00.000-07:00",
      "ends": null,
      "rsvp_deadline": "2019-10-31T06:00:00.000-07:00",
      "capacity": 8,
      "description": "$8175$ IIT - Tower   10 W 35th St.",
      "status": true,
      "unable_to_attend": false,
      "created_at": "2019-09-27T16:00:49.000-07:00",
      "updated_at": "2019-09-27T16:00:49.000-07:00",
      "is_full": false
    }
  ]
}

export default SessionGrid