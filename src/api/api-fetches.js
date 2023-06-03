import axios from 'axios';
import {API_KEY, BASE_URL} from './api-config';

axios.defaults.baseURL = BASE_URL;

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const getMovieDetails = async (movieId, details) => {
  const { data } = await axios.get(
    `movie/${movieId}${details}?api_key=${API_KEY}`
  );
  return data;
};

export const getSearchMovies = async (query) => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data;
};