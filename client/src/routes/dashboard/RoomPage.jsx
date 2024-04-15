import React from 'react'
import Button from '../../components/Button'
import { AroowBack } from '../../context/Icons'
import Calendar from '../../components/Calendar'
import { useParams } from 'react-router-dom';
import TemperatureMetr from '../../components/TemperatureMetr';
import Graf from '../../components/Graf';

export default function RoomPage() {
  const paramsForRooms = useParams();
  const Roomka =
    {
        Id:1,
        RoomName:"Kithen",
        CurrentTemperature:19,
        LastTemperature: 13,
        Cold:[0, 10],
        Normal:[11, 25],
        Hot:[26, 30],
        Dangerous:[31, 50],
    }
  return (
    <div className='max-w-7xl' style={{margin:'0 auto'}}>

      {/* button back */}
      <Button href="/dashboard/rooms" icon={<AroowBack/>} name="Back"/>

      {/* Room name and buttons to edit and delete */}
      <div className='flex ite items-start justify-between max-w-7xl mb-10 h-20' style={{margin:"0 auto", marginTop:"20px"}}>
            <div className='text-3xl text-gray-500'>Kitchen room</div>
            <div className='w-[230px] flex justify-between'>
                <Button href={`/dashboard/room/${paramsForRooms}/edit/`} name="Edit Room"/>
                <Button href="" name="Delete Room" color={"red"}/>
            </div>
        </div>

        {/* Calendar-flowbite */}
        <div className='w-[300px]' style={{margin:"0 auto"}}>
          <Calendar/>
        </div>
        <div className='mt-6'>
          <TemperatureMetr RoomData={Roomka}/>
          <Graf/>
        </div>
        
    </div>
  )
}
