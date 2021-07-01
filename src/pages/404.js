import * as React from "react"
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <p>
        <Link to="/blog">blog</Link>
      </p>
      <p>
        <Link to="/about">about</Link>
      </p>
      <p>
        <Link to="/">index</Link>
      </p>
   </>
  )
}

export default NotFoundPage
