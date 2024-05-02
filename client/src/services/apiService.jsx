const API_BASE_URL = 'http://localhost:3000';
import fetch from 'isomorphic-fetch';


async function fetchRooms(userId, token) {

    try {

        const response = await fetch(`${API_BASE_URL}/room/list/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                mode: 'cors',
            },
        });
        if (!response.ok) {
            console.log('Failed to fetch rooms');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
    }
}

async function fetchRoom(typeOfRoom, token) {
    try {
        const response = await fetch(`${API_BASE_URL}/room/get/${typeOfRoom}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                mode: 'cors',
            },
        });
        // if (!response.ok) {
        //     console.log('Failed to fetch room');
        // }
        return response.json();
    } catch (error) {
        console.error('Error fetching room:', error);
        throw error;
    }
}

async function createRoom(room, token) {
    try {
        const response = await fetch(`${API_BASE_URL}/room/create`, {
            method: 'POST',
            body: JSON.stringify(room),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                mode: 'cors',
            }
        });
        if (!response.ok) {
            console.log('Failed to create room');
        }
        return response.json();
    } catch (error) {
        console.error('Error create room:', error);
        throw error;
    }
}


async function updateRoom(room, token) {
    try {
        const response = await fetch(`${API_BASE_URL}/room/update`, {
            method: 'POST',
            body: JSON.stringify(room),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                mode: 'cors',
            }
        });
        if (!response.ok) {
            console.log('Failed to update room');
        }
        return response.json();
    } catch (error) {
        console.error('Error update room:', error);
        throw error;
    }
}


async function deleteRoom(roomId, userId, token) {
    try {
        const response = await fetch(`${API_BASE_URL}/room/delete/${roomId}/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                mode: 'cors',
            }
        });
        if (!response.ok) {
            console.log('Failed to delete room');
        }
        return response.json();
    } catch (error) {
        console.error('Error deleting room:', error);
        throw error;
    }
}


async function fetchRoomTemperatureHistory(typeOfRoom, date, token) {
    try {
        const response = await fetch(`${API_BASE_URL}/temperature-reading/list/${typeOfRoom}/${date}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                mode: 'cors',
            }
        });
        // if (!response.ok) {
        //     console.log('Failed to fetch room history');
        // }
        return response.json();
    } catch (error) {
        console.error('Error fetching room history:', error);
        throw error;
    }
}

export {fetchRooms, fetchRoom, fetchRoomTemperatureHistory, deleteRoom, createRoom, updateRoom}
