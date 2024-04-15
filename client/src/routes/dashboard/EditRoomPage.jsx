import React from 'react'
import Button from '../../components/Button'
import { AroowBack } from '../../assets/Icons'
import { useParams } from 'react-router-dom';

export default function EditRoomPage() {
  const paramsForRooms = useParams();
  return (
    <div style={{width:"500px", margin:"0 auto"}}>

      {/* button back */}
      <Button href={`/dashboard/room/${paramsForRooms}`} icon={<AroowBack/>} name="Back"/>

      {/* Title form */}
      <div className="sm:px-0 mt-5">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Room edit</h3>
        <div className='text-sm text-gray-400'>Name and temperature</div>
      </div>
      
      <form>
      <div className="mt-6 border-t border-gray-100">
        {/* Room name */}
          <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <div className="text-base leading-6 text-gray-900 flex items-center">Room name</div>
            <input type="text" className='pl-2 rounded-lg' placeholder='Enter a text'/>
          </div>
        {/* Cold temperature */}
          <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <div className="text-base leading-6 text-gray-900 flex items-center">Cold</div>
            <div className='text-gray-500'>
              <div className='w-1/2 float-left'>
                from
                <input type="number" className='w-14 ml-2 rounded-lg text-black' placeholder='0'/>
              </div>
              <div className='w-1/2 float-right flex justify-end items-center'>
                to
                <input type="number" className='w-16 ml-2 rounded-lg text-black' placeholder='0'/>
              </div>
            </div>
          </div>
        {/* Normal temperature */}
          <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <div className="text-base leading-6 text-gray-900 flex items-center">Normal</div>
            <div className='text-gray-500'>
              <div className='w-1/2 float-left'>
                from
                <input type="number" className='w-14 ml-2 rounded-lg text-black' placeholder='0'/>
              </div>
              <div className='w-1/2 float-right flex justify-end items-center'>
                to
                <input type="number" className='w-16 ml-2 rounded-lg text-black' placeholder='0'/>
              </div>
            </div>
          </div>
        {/* Hot temperature */}
          <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <div className="text-base leading-6 text-gray-900 flex items-center">Hot</div>
            <div className='text-gray-500'>
              <div className='w-1/2 float-left'>
                from
                <input type="number" className='w-14 ml-2 rounded-lg text-black' placeholder='0'/>
              </div>
              <div className='w-1/2 float-right flex justify-end items-center'>
                to
                <input type="number" className='w-16 ml-2 rounded-lg text-black' placeholder='0'/>
              </div>
            </div>
          </div>
        {/* Dangerous temperature */}
          <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <div className="text-base leading-6 text-gray-900 flex items-center">Dangerous</div>
            <div className='text-gray-500'>
              <div className='w-1/2 float-left'>
                from
                <input type="number" className='w-14 ml-2 rounded-lg text-black' placeholder='0'/>
              </div>
              <div className='w-1/2 float-right flex justify-end items-center'>
                to
                <input type="number" className='w-16 ml-2 rounded-lg text-black' placeholder='0'/>
              </div>
            </div>
          </div>
      </div>

      {/* Button to save request*/}
      <div className='w-full flex justify-center align-middle mt-5'>
        <Button name="Save" type="submit"/>
      </div>
      </form>
    </div>
  )
}
