import React from "react"
// import { Link } from "gatsby"

// import utils from "../scripts/utils.js"

import SessionGrid from "../components/session-grid"
import Layout from "../components/layout"
import SEO from "../components/seo"

import data from "../static/data.json";
// console.log('data.sessions: ', data.sessions);

const filters = ['school', 'date', 'site'];

class Sessions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      filterSchool: '',
      filterDate: '',
      filterSite: '',
    };
  }

  changeFilter = (event) => {
    console.log(event.target.value);
    this.setState({ filter: event.target.value });
    // return event;
  }

  filterBySchools = (event) => {
    console.log(event.target.value);
    this.setState({ filterSchool: event.target.value });
    // return event;
  }

  filterByDates = (event) => {
    console.log(event.target.value);
    this.setState( { filterDate: event.target.value } );
    // return event;
  }

  filterBySites = (event) => {
    console.log(event.target.value);
    this.setState( { filterSite: event.target.value } );
    // return event;
  }

  render () {

    // create new array of sessions with date
    // TODO: create util func...
    const sessions = data.sessions.map((session, i) => {

      // console.log('monster: ', utils.createMonster(session.starts));

      const dateTime = session.starts.split('T');
      const dateStr = dateTime[0];
      const timeStr = dateTime[1];
      const timeArr = timeStr.split('-')
      session.dateTime = dateTime;
      session.date = dateStr;
      session.time = timeStr;
      const location = session.description.replace(/\$(.*?)\$/, '').replace(/(IIT - \w+)(\s+)(.*)/g, '$1').trim();
      const locationClass = location.replace(/ /g, '').toLowerCase();
      // console.log(location);

      session.location = location;
      session.locationClass = locationClass;

      // console.log('session: ', session);
      return session;
    })
    // console.log('sessions: ', sessions);

    // create array of dates
    // TODO: create util func...
    const arrAllDays = sessions.map((session, i) => {
      // const date = session.starts.split('T')[0];
      return session.date;
    })
    // console.log('arrAllDays: ', arrAllDays);

    // TODO: create util func...
    const arrDays = arrAllDays.reduce((accumulator, currentValue) => {
      return accumulator.includes(currentValue) ? accumulator : [...accumulator, currentValue];
    }, []);
    // console.log('arrDays: ', arrDays);

    // TODO: create util func...
    const arrSites = sessions.map((session, i) => {
      // const date = session.starts.split('T')[0];
      return session.location;
    }).reduce((accumulator, currentValue) => {
      return accumulator.includes(currentValue) ? accumulator : [...accumulator, currentValue];
    }, []);
    // console.log('arrSites: ', arrSites);

    return (
      <Layout>
        <SEO title="Sessions" />
        <h1>Sessions</h1>
        <h2>{data.name}</h2>
        <form action="">
        <fieldset>
          <legend>Filters</legend>
            <label htmlFor="test_filter">
              <span>Test Filter</span>
              <select name="test_filter" id="test_filter" onChange={this.changeFilter}>
                <option value="">choose...</option>
                {filters.map((id, i) => <option key={i} value={id}>{id}</option>)}
              </select>
            </label>
            <label htmlFor="schools_list">
              <span>Schools List</span>
              <select name="schools_list" id="schools_list" onChange={this.filterBySchools}>
                <option value="">All</option>
                {data.school_list.map((id, i) => <option key={i} value={id}>{id}</option>)}
              </select>
            </label>
          <label htmlFor="dates_list">
            <span>Dates List</span>
            <select name="dates_list" id="dates_list" onChange={ this.filterByDates }>
              <option value="">All</option>
              { arrDays.map((date, j) => <option key={j} value={date}>{date}</option>) }
            </select>
          </label>
          <label htmlFor="sites_list">
            <span>Sites List</span>
            <select name="sites_list" id="sites_list" onChange={ this.filterBySites }>
              <option value="">All</option>
              { arrSites.map((date, j) => <option key={j} value={date}>{date}</option>) }
            </select>
          </label>
        </fieldset>
        </form>
        <SessionGrid sessions={sessions} uniqueDates={arrDays} uniqueSites={arrSites} />
      </Layout>
    );
  }

}

export default Sessions;