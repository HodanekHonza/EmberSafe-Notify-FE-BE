import React, { useContext } from 'react';
import EmberNotifyContext from '../../providerContext/DashboardContext';
import Button from '../../components/Button';
import { DownTemperature, NormalTemperature, RedAlert, Snowflake, UpTemperature, YellowAlert } from '../../assets/Icons';
import { Spinner } from "flowbite-react";

export default function RoomsPage() {
    const { rooms, isLoading } = useContext(EmberNotifyContext);

    return (
        <div>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <Spinner color="purple" size="xl" />
                </div>
            ) : (
                <div>
                    {/* Title and button */}
                    <div className='flex items-start justify-between max-w-7xl mb-10 h-20' style={{ margin: "0 auto" }}>
                        <div className='text-3xl font-semibold'>Rooms</div>
                        <div>
                            <Button href="/dashboard/room/add" name="Add new Room" />
                        </div>
                    </div>
                    {/* Room blocks */}
                    <div className='grid grid-cols-4 gap-1 max-w-7xl' style={{ margin: "0 auto" }}>
                        {/* Block room */}
                        {rooms.map((room) => (
                            <RoomBlock key={room._id} room={room} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function RoomBlock({ room }) {
    return (
        <a href={`/dashboard/room/${room.typeOfRoom}`} className='h-[200px] w-[300px] mb-5 rounded-2xl hover:bg-gray-200 ease-in-out duration-200 cursor-pointer ' style={{ boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.25), 0px 0px 20px rgba(0, 0, 0, 0.25)" }}>
            {/* Title of room */}
            <div className='text-3xl font-semibold w-full flex justify-center items-center h-20'>
                {room.typeOfRoom}
            </div>
            {/* Icons and temperature */}
            <div className='flex w-full h-24 justify-center items-center'>
                {room.lastKnownTemperature > room.thresholds.thresholdNormal.high ? (
                    <div><UpTemperature /> <DownTemperature className="invisible" /></div>
                ) : (
                    <div><UpTemperature className="invisible" /> <DownTemperature /></div>
                )}
                <div className='text-3xl mx-5'>
                    {room.lastKnownTemperature + " °C"}
                </div>
                <div>
                    {getTemperatureIcon(room)}
                </div>
            </div>
        </a>
    );
}

function getTemperatureIcon(room) {
    const temperature = room.lastKnownTemperature;
    if (temperature >= room.thresholds.thresholdCold.low && temperature <= room.thresholds.thresholdCold.high) {
        return <Snowflake />;
    } else if (temperature >= room.thresholds.thresholdNormal.low && temperature <= room.thresholds.thresholdNormal.high) {
        return <NormalTemperature />;
    } else if (temperature >= room.thresholds.thresholdHot.low && temperature <= room.thresholds.thresholdHot.high) {
        return <YellowAlert />;
    } else if (temperature >= room.thresholds.thresholdDanger.low && temperature <= room.thresholds.thresholdDanger.high) {
        return <RedAlert />;
    } else {
        return <NormalTemperature />;
    }
}
