// DataContext.js
import React, {useState, useEffect} from 'react';
import {useUser, useAuth} from '@clerk/clerk-react';
import EmberNotifyContext from './DashboardContext';
import {
    createRoom,
    deleteRoom,
    fetchRoom,
    fetchRooms,
    fetchRoomTemperatureHistory,
    updateRoom
} from '../services/apiService';
import {
    useQuery,
} from '@tanstack/react-query'


const DashboardProvider =  ({children}) => {
    const { getToken } = useAuth()



    const {isSignedIn, user, isLoaded} = useUser();
    const [openEditRoom, setOpenEditRoom] = useState(false);
    const [openDeleteRoom, setOpenDeleteRoom] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [openCreateRoom, setOpenCreateRoom] = useState(false)
    const [openLegend, setOpenLegend] = useState(false)
    //condicional rendering on room page either Meter is shown if false or Graph if this state is true
    const [openGraphOrTempMeter, setOpenGraphOrTempMeter] = useState(false)
    const [isNotificationCreate, setIsNotificationCreate] = useState(false);

    const [rooms, setPosts] = useState([]);

    const {isLoading, data} = useQuery({

        queryKey: ['rooms', 'list'],
        queryFn: () => fetchRooms(user.id),
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
        const token = await getToken();
        return fetchRoom(typeOfRoom, token)
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

    async function deleteRoomFunction(roomId) {
        const updatedRooms = rooms.filter((room) => room._id !== roomId);
        setPosts(updatedRooms);
        return deleteRoom(roomId, user.id)
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
        openGraphOrTempMeter,
        setOpenGraphOrTempMeter,
        isLoading,
        openLegend,
        setOpenLegend,
        openDeleteRoom,
        openEditRoom,
        setOpenDeleteRoom,
        setOpenEditRoom,
        showNotification,
        setShowNotification,
        openCreateRoom,
        setOpenCreateRoom,
        isNotificationCreate,
        setIsNotificationCreate,
        user
    };

    return (
        <EmberNotifyContext.Provider value={value}>
            {children}
        </EmberNotifyContext.Provider>
    );
};
export {DashboardProvider};
export default DashboardProvider;

