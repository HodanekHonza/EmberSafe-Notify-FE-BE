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


const DashboardProvider = ({children}) => {
    const {getToken} = useAuth()


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
        queryFn: fetchRoomsFunction,
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

    async function fetchRoomsFunction() {
        const token = await getToken();
        return await fetchRooms(user.id, token)
    }

    async function fetchRoomFunction(typeOfRoom) {
        const token = await getToken();
        return fetchRoom(typeOfRoom, token)
    }

    async function createRoomFunction(room) {
        const token = await getToken();
        setPosts(prevRooms => [...prevRooms, room]);
        return createRoom(room, token);
    }

    async function updateRoomFunction(updatedRoom) {
        const token = await getToken();
        try {
            const response = await updateRoom(updatedRoom, token);
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
        const token = await getToken();
        const updatedRooms = rooms.filter((room) => room._id !== roomId);
        setPosts(updatedRooms);
        return deleteRoom(roomId, user.id, token)
    }


    async function fetchRoomTemperatureHistoryFunction(typeOfRoom, date) {
        const token = await getToken();
        return fetchRoomTemperatureHistory(typeOfRoom, date, token)
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

