import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = ({ navLinks }) => (
  <nav
    style={{
      background: `lavender`,
      marginBottom: `1.45rem`,
    }}
  >
    <ul
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        listStyle: `none`
      }}
    >
      {navLinks.map( (linkObj, i) => {
        return (<li 
          key={i}
          style={{ 
          margin: 0, 
          padding: `1.45rem 1.0875rem`,
          display: `inline` 
        }}>
          <Link
            to={linkObj.url}
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            {linkObj.label}
          </Link>
        </li>)

      })}
    </ul>
  </nav>
)

Nav.propTypes = {
  navLinks: PropTypes.array,
}

Nav.defaultProps = {
  navLinks: [
    {
      url: '/',
      label: 'Home'
    },{
      url: '/sessions',
      label: 'Sessions'
    }
  ]
}

export default Nav
