// DataContext.js
import React, { useState, useEffect } from 'react';
import EmberNotifyContext from './DashboardContext';
import { fetchRoom, fetchRooms } from '../services/apiService';
import {
    useQuery,
} from '@tanstack/react-query'
const DashboardProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const { isLoading, error, data } = useQuery({
        queryKey: ['roomData'],
        queryFn: fetchRooms
    });
    useEffect(() => {
        if (data) {
            setPosts(data);
        }
    }, [data]);


    const value = {
        posts,
    };

    return (
        <EmberNotifyContext.Provider value={value}>
            {children}
        </EmberNotifyContext.Provider>
    );
};
export { DashboardProvider };
export default DashboardProvider;

