// DataContext.js
import React, { useState, useEffect } from 'react';
import EmberNotifyContext from './DashboardContext';
import { createRoom, deleteRoom, fetchRoom, fetchRooms, fetchRoomTemperatureHistory, updateRoom } from '../services/apiService';
import {
    useQuery,
} from '@tanstack/react-query'


const DashboardProvider = ({ children }) => {
    const [openEditRoom, setOpenEditRoom] = useState(false);
    const [openDeleteRoom, setOpenDeleteRoom] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const [rooms, setPosts] = useState([]);
    const { isLoading, data } = useQuery({
        queryKey: ['rooms', 'list'],
        queryFn: fetchRooms,
        refetchInterval: 10000,
    });

    useEffect(() => {
        if (data) {
            setPosts(data);
        }

    }, [data]);

    useEffect(() => {
        setPosts(rooms);

    }, [rooms]);


    async function fetchRoomFunction(typeOfRoom) {
        return fetchRoom(typeOfRoom)
    }
    async function createRoomFunction(room) {
        setPosts(prevRooms => [...prevRooms, room]);
        return createRoom(room);
    }
    async function updateRoomFunction(updatedRoom) {
        try {
            const response = await updateRoom(updatedRoom);
            console.log("Update Room Response:", response);
            setPosts(prevRooms =>
                prevRooms.map(room =>
                    room.typeOfRoom === updatedRoom.typeOfRoom ? updatedRoom : room
                )
            );
            return response;
        } catch (error) {
            console.error("Error updating room:", error);
            throw error;
        }
    }

    async function deleteRoomFunction(typeOfRoom) {
        const updatedRooms = rooms.filter((room) => room.typeOfRoom !== typeOfRoom);
        setPosts(updatedRooms);
        return deleteRoom(typeOfRoom)
    }



    async function fetchRoomTemperatureHistoryFunction(typeOfRoom, date) {
        return fetchRoomTemperatureHistory(typeOfRoom, date)
    }

    const value = {
        rooms,
        fetchRoomFunction,
        createRoomFunction,
        updateRoomFunction,
        deleteRoomFunction,
        fetchRoomTemperatureHistoryFunction,
        isLoading,
        openDeleteRoom,
        openEditRoom,
        setOpenDeleteRoom,
        setOpenEditRoom, 
        showNotification,
        setShowNotification
    };

    return (
        <EmberNotifyContext.Provider value={value}>
            {children}
        </EmberNotifyContext.Provider>
    );
};
export { DashboardProvider };
export default DashboardProvider;

