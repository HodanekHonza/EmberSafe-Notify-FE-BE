import React, { useContext, useState } from 'react';
import Button from '../../components/Button'
import { AroowBack } from '../../assets/Icons'
import Calendar from '../../components/room/Calendar'
import { useParams } from 'react-router-dom';
import Graf from '../../components/room/Graf';
import EmberNotifyContext from '../../providerContext/DashboardContext';
import {
  useQuery,
} from '@tanstack/react-query'
import Gauge from '../../components/room/Gauge';
import { Spinner } from "flowbite-react";
export default function RoomPage() {

  const paramsForRooms = useParams();
  const [dateCalendar, setDateCalendar] = useState(""); // one helper state for calendar date
  const { fetchRoomFunction, fetchRoomTemperatureHistoryFunction } = useContext(EmberNotifyContext);


  const { isLoading, data: roomData } = useQuery({
    queryKey: ['room', "list", paramsForRooms.roomId],
    queryFn: () => fetchRoomFunction(paramsForRooms.roomId),
    refetchInterval: 10000,
  });

  const { isLoading: isLoadingTemperature, data: temperatureData } = useQuery({
    queryKey: ['temperature-reading', paramsForRooms.roomId, dateCalendar],
    queryFn: () => fetchRoomTemperatureHistoryFunction(paramsForRooms.roomId, dateCalendar),
    refetchInterval: 10000
  });



  // useEffect(() => {
  //     console.log(roomData)
  //     console.log(dateCalendar)
  //     console.log(temperatureData)
  // }, [roomData, error, temperatureData, dateCalendar])

  return (
    <div className="max-w-7xl mx-auto">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner color="purple" size="xl" />
        </div>
      ) : (
        <>
          <Button href="/dashboard" icon={<AroowBack />} name="Back" />

          <div className="flex flex-col lg:flex-row justify-between items-center mb-10 mt-6">
            <div className="text-3xl text-gray-500 lg:mb-0">{roomData.typeOfRoom}</div>
            <div className="flex-grow flex justify-center items-center mx-auto mb-6">
              <Calendar setDateState={setDateCalendar} />
            </div>
            <div className="flex gap-4">
              <Button href={`/dashboard/room/${paramsForRooms.roomId}/edit/`} name="Edit Room" />
              <Button href="" name="Delete Room" color="red" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-20">
            <div>
              <Gauge lastKnownTemperature={roomData.lastKnownTemperature} />
            </div>
            <div>
              {isLoadingTemperature ? (
                <div className="flex justify-center items-center h-screen">
                  <Spinner color="purple" size="xl" />
                </div>
              ) : (
                <Graf temperatureData={temperatureData} RoomData={roomData} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
