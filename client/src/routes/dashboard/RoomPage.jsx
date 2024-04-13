import React from 'react'
import Button from '../../components/Button'
import { AroowBack } from '../../context/Icons'
import Calendar from '../../components/Calendar'

export default function RoomPage() {
  return (
    <div className='max-w-7xl' style={{margin:'0 auto'}}>
      <Button href="/dashboard/rooms" icon={<AroowBack/>} name="Back"/>
      
      <div className='flex ite items-start justify-between max-w-7xl mb-10 h-12 h-20' style={{margin:"0 auto", marginTop:"20px"}}>
            <div className='text-3xl text-gray-500'>Kitchen room</div>
            <div className='w-[230px] flex justify-between'>
                <Button href="" name="Edit Room"/>
                <Button href="" name="Delete Room" color={"red"}/>
            </div>
        </div>
        <div className='w-[300px]' style={{margin:"0 auto"}}>
          <Calendar/>
        </div>
        
    </div>
  )
}
