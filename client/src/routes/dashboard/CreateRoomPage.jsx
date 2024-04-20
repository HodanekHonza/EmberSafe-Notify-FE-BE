import React from 'react'
import Button from '../../components/Button.jsx'
import { AroowBack } from '../../assets/Icons.jsx'
import CreateForm from '../../components/room/CreateForm.jsx'
export default function CreateRoomPage() {
  return (
    <div style={{ maxWidth: "500px", width: "90%", margin: "0 auto", height: "80vh" }} className='pt-40'>
      <CreateForm />
    </div>
  )
}
