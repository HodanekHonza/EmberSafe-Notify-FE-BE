import React from 'react'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function Root() {
  const paramsForRooms = useParams();
  console.log(paramsForRooms)
  return (
    <div>
      <h1>NAVBAR</h1>
      <div id="detail">
            <Outlet />
        </div>
      <h1>FOOTER</h1>
    </div>
  )
}
