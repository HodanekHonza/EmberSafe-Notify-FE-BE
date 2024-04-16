import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button'
import { AroowBack } from '../../assets/Icons'
import Calendar from '../../components/Calendar'
import { useParams } from 'react-router-dom';
import TemperatureMetr from '../../components/TemperatureMetr';
import Graf from '../../components/Graf';
import EmberNotifyContext from '../../providerContext/DashboardContext';
import {
  useQuery,
} from '@tanstack/react-query'
import { Spinner } from "flowbite-react";
export default function RoomPage() {

  const paramsForRooms = useParams();
  const [dateCalendar, setDateCalendar] = useState(""); // one helper state for calendar date
  const { fetchRoomFunction, fetchRoomTemperatureHistoryFunction } = useContext(EmberNotifyContext);


  const { isLoading, error, data: roomData } = useQuery({
    queryKey: ['room', "list", paramsForRooms.roomId],
    queryFn: () => fetchRoomFunction(paramsForRooms.roomId)
  });

  const { isLoading: isLoadingTemperature, error: errorTemperature, data: temperatureData } = useQuery({
    queryKey: ['temperature-reading', paramsForRooms.roomId, dateCalendar],
    queryFn: () => fetchRoomTemperatureHistoryFunction(paramsForRooms.roomId, dateCalendar)
  });



  // useEffect(() => {
  //     console.log(roomData)
  //     console.log(dateCalendar)
  //     console.log(temperatureData)
  // }, [roomData, error, temperatureData, dateCalendar])

  return (
    <>
      {isLoading ? <div className="flex justify-center items-center h-screen">
        <Spinner color="purple" size="xl" />
      </div> : <div className='max-w-7xl' style={{ margin: '0 auto' }}>

        {/* button back */}
        <Button href="/dashboard" icon={<AroowBack />} name="Back" />

        {/* Room name and buttons to edit and delete */}
        <div className='flex ite items-start justify-between max-w-7xl mb-10 h-20' style={{ margin: "0 auto", marginTop: "20px" }}>
          <div className='text-3xl text-gray-500'>{roomData.typeOfRoom}</div>
          <div className='w-[230px] flex justify-between'>
            <Button href={`/dashboard/room/${paramsForRooms}/edit/`} name="Edit Room" />
            <Button href="" name="Delete Room" color={"red"} />
          </div>
        </div>

        {/* Calendar-flowbite */}
        <div className='w-[300px]' style={{ margin: "0 auto" }}>
          <Calendar setDateState={setDateCalendar} />
        </div>
        <div className='mt-6 flex'>
          <div className=' w-1/2'>
            <TemperatureMetr roomData={roomData} />
          </div>
          <div className='h-[500px] w-1/2'>
            {isLoadingTemperature ? "LOADING" : <Graf temperatureData={temperatureData} RoomData={roomData} />}

          </div>
        </div>
      </div>}
    </>
  )
}
