import React, { useContext } from 'react';
import EmberNotifyContext from '../../providerContext/DashboardContext';
import { Spinner } from "flowbite-react";
import RoomBlock from '../../components/rooms/RoomBlock';

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
                    <div className="flex flex-row gap-6 flex-wrap">
                        {rooms.map((room) => (
                            <RoomBlock key={room._id} room={room} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}