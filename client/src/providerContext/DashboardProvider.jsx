// DataContext.js
import React, { useState, useEffect } from 'react';
import EmberNotifyContext from './DashboardContext';
import { fetchRoom, fetchRooms, fetchRoomTemperatureHistory } from '../services/apiService';
import {
    useQuery,
} from '@tanstack/react-query'
const DashboardProvider = ({ children }) => {
    const [rooms, setPosts] = useState([]);
    const { isLoading, data } = useQuery({
        queryKey: ['rooms', 'list'],
        queryFn: fetchRooms
    });

    useEffect(() => {
        if (data) {
            setPosts(data);
        }
    }, [data]);


    async function fetchRoomFunction(typeOfRoom) {
        return fetchRoom(typeOfRoom)
    }

    async function fetchRoomTemperatureHistoryFunction(typeOfRoom, date) {
        return fetchRoomTemperatureHistory(typeOfRoom, date)
    }

    const value = {
        rooms,
        fetchRoomFunction,
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

