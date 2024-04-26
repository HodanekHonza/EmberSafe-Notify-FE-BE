const API_BASE_URL = 'http://localhost:3000';

async function fetchRooms(userId) {
    try {
        const response = await fetch(`${API_BASE_URL}/room/list/${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch rooms');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
    }
}

async function fetchRoom(typeOfRoom) {
    try {
        const response = await fetch(`${API_BASE_URL}/room/get/${typeOfRoom}`, {
            method: 'GET',

        });
        if (!response.ok) {
            throw new Error('Failed to fetch room');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching room:', error);
        throw error;
    }
}
async function createRoom(room) {
    try {
        const response = await fetch(`${API_BASE_URL}/room/create`, {
            method: 'POST',
            body: JSON.stringify(room),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to create room');
        }
        return response.json();
    } catch (error) {
        console.error('Error create room:', error);
        throw error;
    }
}


async function updateRoom(room) {
    try {
        const response = await fetch(`${API_BASE_URL}/room/update`, {
            method: 'POST',
            body: JSON.stringify(room),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to update room');
        }
        return response.json();
    } catch (error) {
        console.error('Error update room:', error);
        throw error;
    }
}


async function deleteRoom(typeOfRoom) {
    try {
        const response = await fetch(`${API_BASE_URL}/room/delete/${typeOfRoom}`, {
            method: 'DELETE',

        });
        if (!response.ok) {
            throw new Error('Failed to delete room');
        }
        return response.json();
    } catch (error) {
        console.error('Error deleting room:', error);
        throw error;
    }
}


async function fetchRoomTemperatureHistory(typeOfRoom, date) {
    try {
        const response = await fetch(`${API_BASE_URL}/temperature-reading/list/${typeOfRoom}/${date}`, {
            method: 'GET',

        });
        if (!response.ok) {
            throw new Error('Failed to fetch room history');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching room history:', error);
        throw error;
    }
}

export { fetchRooms, fetchRoom, fetchRoomTemperatureHistory, deleteRoom, createRoom, updateRoom }
