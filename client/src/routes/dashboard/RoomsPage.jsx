import React, {useContext, useState} from 'react';
import EmberNotifyContext from '../../providerContext/DashboardContext';
import {Spinner} from "flowbite-react";
import RoomCard from '../../components/rooms/RoomCard';
import Notification from '../../components/room/Notification';
import PageHeading from '../../components/rooms/PageHeading';

export default function RoomsPage() {
    const {
        rooms,
        isLoading,
        showNotification,
        setShowNotification,
        isNotificationCreate
    } = useContext(EmberNotifyContext);
    const [visibleRooms, setVisibleRooms] = useState(3); // Initialize with 3 rooms visible

    const loadMoreRooms = () => {
        setVisibleRooms((prevVisibleRooms) => prevVisibleRooms + 3); // Increment the number of visible rooms by 3
    };

    const showLessRooms = () => {
        setVisibleRooms((prevVisibleRooms) => (prevVisibleRooms - 3 >= 3 ? prevVisibleRooms - 3 : 3)); // Decrement the number of visible rooms by 3, but not less than 3
    };

    return (
        <div className="">
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <Spinner color="purple" size="xl"/>
                </div>
            ) : (
                <div>
                    <PageHeading/>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pb-5">
                        <Notification show={showNotification} setShow={setShowNotification}
                                      text={isNotificationCreate ? "Created" : "Deleted"}/>
                        {rooms.slice(0, visibleRooms).map((room) => (
                            <RoomCard key={room._id} room={room}/>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4 gap-4">
                        {visibleRooms < rooms.length && (
                            <button
                                onClick={loadMoreRooms}
                                type="button"
                                className="flex flex-row items-center border-none gap-3 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"/>
                                </svg>
                                <p>Load More Rooms</p>
                            </button>
                        )}
                        {visibleRooms > 3 && (
                            <button
                                onClick={showLessRooms}
                                type="button"
                                className="flex flex-row items-center border-none gap-3 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-red-600 hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 12h16.5m-8.25-8.25v16.5"/>
                                </svg>
                                <p>Show Less Rooms</p>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
