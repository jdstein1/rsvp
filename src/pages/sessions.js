import React from "react"
import { Link } from "gatsby"

import SessionGrid from "../components/session-grid"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Sessions" />
    <h1>Sessions</h1>
    <p>Welcome to the sessions page</p>
    {/* <Link to="/">Go back to the homepage</Link> */}
    <SessionGrid />
  </Layout>
)

export default SecondPage
