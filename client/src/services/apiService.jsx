const API_BASE_URL = 'http://localhost:3000';

async function fetchRooms() {
    try {
        const response = await fetch(`${API_BASE_URL}/room/list`);
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


async function fetchRoomTemperatureHistory(typeOfRoom, date) {
    try {
        const response = await fetch(`${API_BASE_URL}/temperature-reading/list/${typeOfRoom}/${date}`, {
            method: 'GET',

        });
        if (!response.ok) {
            throw new Error('Failed to fetch room');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching room history:', error);
        throw error;
    }
}

export { fetchRooms, fetchRoom, fetchRoomTemperatureHistory }
export default (fetchRooms, fetchRoom)