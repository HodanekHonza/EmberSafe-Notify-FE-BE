import React, { useContext } from 'react';
import EmberNotifyContext from '../../providerContext/DashboardContext';
import { Spinner } from "flowbite-react";
import RoomCard from '../../components/rooms/RoomCard';

export default function RoomsPage() {
    const { rooms, isLoading } = useContext(EmberNotifyContext);

    return (
        <div className="">
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <Spinner color="purple" size="xl" />
                </div>
            ) : (
                <div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {rooms.map((room) => (
                            <RoomCard key={room._id} room={room} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}