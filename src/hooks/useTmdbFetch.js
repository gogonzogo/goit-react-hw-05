import axios from 'axios';
import { useEffect, useState } from 'react';
import { TMDB_API_CONFIG } from 'config/api-config';
import {
  getCurrentTimeStamp, isTimeStampExpired } from 'utils/fetchUtils';

export const useTmdbFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { API_KEY, BASE_URL } = TMDB_API_CONFIG;

  useEffect(() => {
    const fetchData = async () => {
      if (!url || url === `/search/movie?query=`) {
        setData();
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        const cachedData = localStorage.getItem(url);

        if (cachedData) {
          const { timeStamp, responseData } = JSON.parse(localStorage.getItem(url));
          const isDataExpired = isTimeStampExpired(timeStamp);

          if (!isDataExpired) {
            setData(responseData);
            setError(null);
            setIsLoading(false);
            return;
          } else {
            localStorage.clear();
          }
        }
        const response = await axios(`${BASE_URL}${url}`, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
            adult: false,
          },
        });
        const responseData = response.data;
        console.log(responseData)
        if (responseData.total_results === 0) {
          setData(null);
          setError(true);
          return;
        }
        const timeStamp = getCurrentTimeStamp();
        localStorage.setItem(url, JSON.stringify({ timeStamp, responseData }));
        setData(response.data);
        setError(null);
        setTotalResults(response.data.total_results);
      } catch (error) {
        setError(error)
        setData(null);
        console.log(`Error fetching data from ${url}: , ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, API_KEY, BASE_URL]);
  return { data, error, isLoading, totalResults };
};

export default useTmdbFetch;