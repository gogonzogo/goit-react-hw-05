import css from './Cast.module.css';
import AdditionalInfoCard from 'components/AdditionalInfoCard/AdditionalInfoCard';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'api/api-fetches';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [castDetails, setCastDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId, '/credits')
      .then(data => setCastDetails(data.cast))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return !error ? (
    !isLoading ? (
      <div className={css.castDetailsContainer}>
        <ul className={css.castDetailsList}>
          {castDetails.map(cast => (
            <AdditionalInfoCard
              className={css.castItem}
              key={cast.cast_id}
              profilePath={cast.profile_path}
              name={cast.name}
              character={cast.character}
              isLoading={isLoading}
              error={error}
            />
          ))}
        </ul>
      </div>
    ) : (
      <Loader />
    )
  ) : (
    <h5>Sorry, no cast details at this time.</h5>
  );
};

export default Cast;
