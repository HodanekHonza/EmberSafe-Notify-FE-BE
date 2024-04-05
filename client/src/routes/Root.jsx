import React from 'react'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function RoomsPage() {
  const paramsForRooms = useParams();
  console.log(paramsForRooms)
  return (
    <div>
      RoomsPage
    </div>
  )
}
