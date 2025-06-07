import axios from 'axios';

const AI_API_URL = 'https://api.example.com/check'; // Replace with the actual AI API URL

export const checkAnswers = async (answers) => {
    try {
        const response = await axios.post(AI_API_URL, { answers });
        return response.data; // Assuming the API returns the results in the data field
    } catch (error) {
        console.error('Error checking answers:', error);
        throw new Error('Could not check answers. Please try again later.');
    }
};