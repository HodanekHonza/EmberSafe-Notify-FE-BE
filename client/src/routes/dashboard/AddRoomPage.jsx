import React from 'react'
import Button from '../../components/Button.jsx'
import { AroowBack } from '../../assets/Icons.jsx'

export default function AddRoomPage() {
  return (
    <div style={{width:"500px", margin:"0 auto"}}>

      {/* button back */}
      <Button href="/dashboard/rooms" icon={<AroowBack/>} name="Back"/>

      {/* Create new Room Title */}
      <div className="sm:px-0 text-center mt-5">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Create new Room</h3>
      </div>

      <form>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <div className="text-base font-medium leading-6 text-gray-900 flex items-center">Device type</div>
            <input type="text" className='pl-2 rounded-lg' placeholder='Enter a text'/>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-base font-medium leading-6 text-gray-900 flex items-center">Room name</dt>
            <input type="text" className='pl-2 rounded-lg' placeholder='Enter a text'/>
          </div>
        </dl>
      </div>

      {/* Button to Create request*/}
      <div className='w-full flex justify-center align-middle'>
        <Button name="Create" type="submit"/>
      </div>
      </form>
    </div>
  )
}
