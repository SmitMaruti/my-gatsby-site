import * as React from "react";
import {Link} from 'gatsby'

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>
        <Link to="/">index</Link>
      </p>
      <p>
        <Link to="/blog">about</Link>
      </p>
    </>
  )
}

export default About
