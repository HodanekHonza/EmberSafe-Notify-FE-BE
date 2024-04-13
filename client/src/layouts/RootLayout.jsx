import React from 'react'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { SignOutButton } from "@clerk/clerk-react";
export default function RootLayout() {
  const paramsForRooms = useParams();
  console.log(paramsForRooms)
  return (
    <div>
      <SignOutButton />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  )
}
