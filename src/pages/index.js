import * as React from "react";
import {Link} from 'gatsby'

const IndexPage = () => {
  return (
    <>
      <h1>Index</h1>
      <p>
        <Link to="/blog">blog</Link>
      </p>
      <p>
        <Link to="/about">about</Link>
      </p>
    </>
  )
}

export default IndexPage
