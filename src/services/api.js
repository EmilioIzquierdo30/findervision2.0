import axios from 'axios';

const API_URL = 'http://localhost:3001/api/plants';

export const getPlants = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las plantas:', error);
        throw error;
    }
};
