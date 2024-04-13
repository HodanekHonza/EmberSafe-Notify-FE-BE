import React from 'react'
import Button from '../../components/Button.jsx'
import { AroowBack } from '../../context/Icons.jsx'

export default function AddRoomPage() {
  return (
    <div style={{width:"500px", margin:"0 auto"}}>
      <Button href="/dashboard/rooms" icon={<AroowBack/>} name="Back"/>
      <div className="sm:px-0 text-center">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Create new Room</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Device type</dt>
            <input type="text" className='pl-2' placeholder='Enter a text'/>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Room name</dt>
            <input type="text" className='pl-2' placeholder='Enter a text'/>
          </div>
        </dl>
      </div>
      <div className='w-full flex justify-center align-middle'>
      <Button name="Create"/>
      </div>
    </div>
  )
}
