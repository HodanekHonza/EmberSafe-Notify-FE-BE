// DataContext.js
import React, { useState, useEffect } from 'react';
import EmberNotifyContext from './DashboardContext';
import { createRoom, deleteRoom, fetchRoom, fetchRooms, fetchRoomTemperatureHistory } from '../services/apiService';
import {
    useQuery,
} from '@tanstack/react-query'


const DashboardProvider = ({ children }) => {

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

    async function deleteRoomFunction(typeOfRoom) {
        const updatedRooms = rooms.filter((room) => room.typeOfRoom !== typeOfRoom);
        setPosts(updatedRooms);
        return deleteRoom(typeOfRoom)
    }

    async function createRoomFunction(room) {
        setPosts(prevRooms => [...prevRooms, room]);
        return createRoom(room);
    }

    async function fetchRoomTemperatureHistoryFunction(typeOfRoom, date) {
        return fetchRoomTemperatureHistory(typeOfRoom, date)
    }

    const value = {
        rooms,
        fetchRoomFunction,
        deleteRoomFunction,
        createRoomFunction,
        fetchRoomTemperatureHistoryFunction,
        isLoading
    };

    return (
        <EmberNotifyContext.Provider value={value}>
            {children}
        </EmberNotifyContext.Provider>
    );
};
export { DashboardProvider };
export default DashboardProvider;

