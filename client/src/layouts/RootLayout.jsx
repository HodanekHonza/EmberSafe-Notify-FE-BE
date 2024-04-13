import React from 'react'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { SignOutButton } from "@clerk/clerk-react";
import { useAuth } from '@clerk/clerk-react'
export default function RootLayout() {
  const paramsForRooms = useParams();
   const { getToken } = useAuth()
  async function getTokenRetunr() {
   
    const token = await getToken()

    console.log(token)
  }
  getTokenRetunr()
  console.log(paramsForRooms)
  return (
    <div>
      <h1>NAVBAR</h1>
      <SignOutButton />
      <div id="detail">
        <Outlet />
      </div>
      <h1>FOOTER</h1>
    </div>
  )
}
