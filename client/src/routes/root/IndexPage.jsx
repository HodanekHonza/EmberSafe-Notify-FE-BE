import React from 'react'
import { Link } from "react-router-dom"
export default function IndexPage() {
  return (
    <div>IndexPage
      <Link to={`dashboard`}>DASH BOARD LINK</Link>
    </div>
  )
}
