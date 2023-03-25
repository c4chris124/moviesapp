import axios from "axios";


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '5c6c29a177b8a2e5e2862cd2f5841184',
        language: 'en-US',
    }
})

export default movieDB