import React, { useContext } from 'react';
import EmberNotifyContext from '../../providerContext/DashboardContext';
import Button from '../../components/Button';
import { DownTemperature, NormalTemperature, RedAlert, Snowflake, UpTemperature, YellowAlert } from '../../assets/Icons';
import { Spinner } from "flowbite-react";

export default function RoomsPage() {
    const { rooms, isLoading } = useContext(EmberNotifyContext);

    return (
        <div className="container mx-auto">
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <Spinner color="purple" size="xl" />
                </div>
            ) : (
                <div>
                
                    <div className='flex flex-col justify-center sm:flex-row items-center sm:items-start sm:justify-between max-w-7xl mb-10 pb-5 h-20 px-11' style={{ margin: "0 auto" }}>
                        <h2 className='text-4xl font-extrabold dark:text-white mb-4 sm:mb-0'>Rooms</h2>
                        <div>
                            <Button href="/dashboard/room/add" name="Add new Room" />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-7xl px-11' style={{ margin: "0 auto" }}>
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
    const temperatureIcon = getTemperatureIcon(room);
    const isTemperatureHigh = room.lastKnownTemperature > room.thresholds.thresholdNormal.high;

    return (
        <a href={`/dashboard/room/${room.typeOfRoom}`} className='sm:mt-0 mt-11 rounded-lg shadow-lg hover:bg-gray-200 transition duration-200'>
            <div className='p-4'>
                <div className='text-xl font-semibold'>{room.typeOfRoom}</div>
                <div className='flex items-center mt-4'>
                    {isTemperatureHigh ? (
                        <>
                            <UpTemperature className='mr-2' />
                            <DownTemperature className='invisible mr-2' />
                        </>
                    ) : (
                        <>
                            <UpTemperature className='invisible mr-2' />
                            <DownTemperature className='mr-2' />
                        </>
                    )}
                    <div className='text-xl'>{room.lastKnownTemperature} °C</div>
                    <div className='ml-auto'>{temperatureIcon}</div>
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
