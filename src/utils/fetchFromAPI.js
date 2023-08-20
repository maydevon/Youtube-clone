import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': '1a760f7937msheb0046bda7d48bcp191969jsnabb69cf7f20c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}
    };

    export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};



