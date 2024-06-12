import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../../components/room/Calendar";
import { Spinner } from "flowbite-react";
import RoomHeader from "../../components/room/RoomHeader.jsx";
import Graf from "../../components/room/Graf";
import EmberNotifyContext from "../../providerContext/DashboardContext";
import { AroowBack } from "../../assets/Icons";
import Gauge from "../../components/room/Gauge";
import EditRoomModal from "../../components/room/EditRoomModal";
import DeleteRoomModal from "../../components/room/DeleteRoomModal";
import Button from "../../components/Button";
import Notification from "../../components/room/Notification";

export default function RoomPage() {
  const navigate = useNavigate();
  const paramsForRooms = useParams();
  if (paramsForRooms === undefined) {
    navigate("/dashboard");
  }
  // move this state to provider as well
  const [dateCalendar, setDateCalendar] = useState(""); // helper state for calendar date
  const {
    fetchRoomFunction,
    fetchRoomTemperatureHistoryFunction,
    setOpenDeleteRoom,
    setOpenEditRoom,
    showNotification,
    setShowNotification,
  } = useContext(EmberNotifyContext);

  const { isLoading, data: roomData } = useQuery({
    queryKey: ["room", "get", paramsForRooms.roomId],
    queryFn: () => fetchRoomFunction(paramsForRooms.roomId),
    refetchInterval: 10000,
  });

  const { isLoading: isLoadingTemperature, data: temperatureData } = useQuery({
    queryKey: ["temperature-reading", paramsForRooms.roomId, dateCalendar],
    queryFn: () =>
      fetchRoomTemperatureHistoryFunction(paramsForRooms.roomId, dateCalendar),
    refetchInterval: 10000,
  });

  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      {isLoading ? (
        <div className="flex h-screen">
          <Spinner color="purple" size="xl" />
        </div>
      ) : (
        <>
          <RoomHeader
            calendar={<Calendar setDateState={setDateCalendar} />}
            nameOfRoom={roomData.typeOfRoom}
          />
          <div className="grid grid-rows-2 gap-16 pt-10">
            <div className="max-w-4xl">
              {isLoadingTemperature ? (
                <div>
                  <Spinner color="purple" size="xl" />
                </div>
              ) : (
                <Graf temperatureData={temperatureData} RoomData={roomData} />
              )}
            </div>
            <div className="max-w-4xl">
              <Gauge thresholds={roomData.thresholds} lastKnownTemperature={roomData.lastKnownTemperature} />
            </div>
          </div>
          <EditRoomModal roomData={roomData} />
          <DeleteRoomModal typeOfRoom={paramsForRooms.roomId} />
          <Notification
            show={showNotification}
            setShow={setShowNotification}
            text={"Edited"}
          />
        </>
      )}
    </div>
  );
}
