import axios from 'axios';

const movieInstance = axios.create({
    baseURL: '//api.themoviedb.org/3',
   });

export {movieInstance};