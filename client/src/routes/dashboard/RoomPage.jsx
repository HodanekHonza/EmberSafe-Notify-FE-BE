import React from 'react'
import Button from '../../components/Button'
import { AroowBack } from '../../assets/Icons'
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
        CurrentTemperature:40,
        LastTemperature: 13,
        Cold:[0, 10],
        Normal:[11, 25],
        Hot:[26, 30],
        Dangerous:[31, 50],
    }
    const data = [
      { name: '00:00', Temperature: 27 },
      { name: '00:10', Temperature: 18 },
      { name: '00:20', Temperature: 23 },
      { name: '00:30', Temperature: 20 },
      { name: '00:40', Temperature: 28 },
      { name: '00:50', Temperature: 25 },
      { name: '01:00', Temperature: 17 },
      { name: '01:10', Temperature: 29 },
      { name: '01:20', Temperature: 22 },
      { name: '01:30', Temperature: 26 },
      { name: '01:40', Temperature: 19 },
      { name: '01:50', Temperature: 21 },
      { name: '02:00', Temperature: 24 },
      { name: '02:10', Temperature: 30 },
      { name: '02:20', Temperature: 16 },
      { name: '02:30', Temperature: 28 },
      { name: '02:40', Temperature: 17 },
      { name: '02:50', Temperature: 25 },
      { name: '03:00', Temperature: 29 },
      { name: '03:10', Temperature: 18 },
      { name: '03:20', Temperature: 22 },
      { name: '03:30', Temperature: 20 },
      { name: '03:40', Temperature: 27 },
      { name: '03:50', Temperature: 19 },
      { name: '04:00', Temperature: 26 },
      { name: '04:10', Temperature: 16 },
      { name: '04:20', Temperature: 23 },
      { name: '04:30', Temperature: 21 },
      { name: '04:40', Temperature: 24 },
      { name: '04:50', Temperature: 30 },
      { name: '05:00', Temperature: 18 },
      { name: '05:10', Temperature: 27 },
      { name: '05:20', Temperature: 19 },
      { name: '05:30', Temperature: 22 },
      { name: '05:40', Temperature: 20 },
      { name: '05:50', Temperature: 26 },
      { name: '06:00', Temperature: 29 },
      { name: '06:10', Temperature: 23 },
      { name: '06:20', Temperature: 16 },
      { name: '06:30', Temperature: 28 },
      { name: '06:40', Temperature: 25 },
      { name: '06:50', Temperature: 17 },
      { name: '07:00', Temperature: 21 },
      { name: '07:10', Temperature: 30 },
      { name: '07:20', Temperature: 18 },
      { name: '07:30', Temperature: 24 },
      { name: '07:40', Temperature: 19 },
      { name: '07:50', Temperature: 26 },
      { name: '08:00', Temperature: 20 },
      { name: '08:10', Temperature: 28 },
      { name: '08:20', Temperature: 17 },
      { name: '08:30', Temperature: 22 },
      { name: '08:40', Temperaroomsture: 16 },
      { name: '09:30', Temperature: 29 },
      { name: '09:40', Temperature: 21 },
      { name: '09:50', Temperature: 27 },
      { name: '10:00', Temperature: 18 },
      { name: '10:10', Temperature: 26 },
      { name: '10:20', Temperature: 19 },
      { name: '10:30', Temperature: 22 },
      { name: '10:40', Temperature: 20 },
      { name: '10:50', Temperature: 28 },
      { name: '11:00', Temperature: 17 },
      { name: '11:10', Temperature: 24 },
      { name: '11:20', Temperature: 16 },
      { name: '11:30', Temperature: 29 },
      { name: '11:40', Temperature: 21 },
      { name: '11:50', Temperature: 27 },
      { name: '12:00', Temperature: 18 },
      { name: '12:10', Temperature: 23 },
      { name: '12:20', Temperature: 16 },
      { name: '12:30', Temperature: 29 },
      { name: '12:40', Temperature: 22 },
      { name: '12:50', Temperature: 26 },
      { name: '13:00', Temperature: 20 },
      { name: '13:10', Temperature: 28 },
      { name: '13:20', Temperature: 17 },
      { name: '13:30', Temperature: 25 },
      { name: '13:40', Temperature: 30 },
      { name: '13:50', Temperature: 19 },
      { name: '14:00', Temperature: 23 },
      { name: '14:10', Temperature: 16 },
      { name: '14:20', Temperature: 29 },
      { name: '14:30', Temperature: 22 },
      { name: '14:40', Temperature: 27 },
      { name: '14:50', Temperature: 18 },
      { name: '15:00', Temperature: 26 },
      { name: '15:10', Temperature: 21 },
      { name: '15:20', Temperature: 28 },
      { name: '15:30', Temperature: 17 },
      { name: '15:40', Temperature: 24 },
      { name: '15:50', Temperature: 19 },
      { name: '16:00', Temperature: 23 },
      { name: '16:10', Temperature: 30 },
      { name: '16:20', Temperature: 16 },
      { name: '16:30', Temperature: 29 },
      { name: '16:40', Temperature: 18 },
      { name: '16:50', Temperature: 27 },
      { name: '17:00', Temperature: 20 },
      { name: '17:10', Temperature: 25 },
      { name: '17:20', Temperature: 19 },
      { name: '17:30', Temperature: 22 },
      { name: '17:40', Temperature: 21 },
      { name: '17:50', Temperature: 28 },
      { name: '18:00', Temperature: 17 },
      { name: '18:10', Temperature: 26 },
      { name: '18:20', Temperature: 16 },
      { name: '18:30', Temperature: 27 },
      { name: '18:40', Temperature: 18 },
      { name: '18:50', Temperature: 23 },
      { name: '19:00', Temperature: 20 },
      { name: '19:10', Temperature: 29 },
      { name: '19:20', Temperature: 19 },
      { name: '19:30', Temperature: 26 },
      { name: '19:40', Temperature: 17 },
      { name: '19:50', Temperature: 24 },
      { name: '20:00', Temperature: 21 },
      { name: '20:10', Temperature: 28 },
      { name: '20:20', Temperature: 18 },
      { name: '20:30', Temperature: 27 },
      { name: '20:40', Temperature: 16 },
      { name: '20:50', Temperature: 25 },
      { name: '21:00', Temperature: 22 },
      { name: '21:10', Temperature: 19 },
      { name: '21:20', Temperature: 30 },
      { name: '21:30', Temperature: 17 },
      { name: '21:40', Temperature: 28 },
      { name: '21:50', Temperature: 20 },
      { name: '22:00', Temperature: 25 },
      { name: '22:10', Temperature: 16 },
      { name: '22:20', Temperature: 27 },
      { name: '22:30', Temperature: 18 },
      { name: '22:40', Temperature: 24 },
      { name: '22:50', Temperature: 21 },
      { name: '23:00', Temperature: 26 },
      { name: '23:10', Temperature: 19 },
      { name: '23:20', Temperature: 29 },
      { name: '23:30', Temperature: 20 },
      { name: '23:40', Temperature: 23 },
      { name: '23:50', Temperature: 17 }
    ];
    
    
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
        <div className='mt-6 flex'>
          <div className=' w-1/2'>
            <TemperatureMetr RoomData={Roomka}/>
          </div>
          <div className='h-[500px] w-1/2'>
            <Graf TemperatureHistory={data} RoomData={Roomka}/>
          </div>
        </div>
        
    </div>
  )
}
