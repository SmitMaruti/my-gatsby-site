import * as React from "react";
import {Link} from 'gatsby'

const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <p>
        <Link to="/">index</Link>
      </p>
      <p>
        <Link to="/about.html">about</Link>
      </p>
    </>
  )
}

export default Blog
