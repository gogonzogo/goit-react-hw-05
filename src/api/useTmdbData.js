import { useParams } from 'react-router-dom';
import useTmdbFetch from 'hooks/useTmdbFetch';
import { getTmdbApiEndpoint } from 'api/api-config';

export const useTmdbData = (option, userQuery) => {
  const { movieId } = useParams();
  let URL = getTmdbApiEndpoint(movieId, option, userQuery);
  const { data, isLoading, error } = useTmdbFetch(URL, userQuery);

  return { movieId, URL, data, isLoading, error };
};

export default useTmdbData;