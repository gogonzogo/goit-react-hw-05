import css from './MovieDetails.module.css';
import BackButton from 'components/BackButton/BackButton';
import MovieCard from 'components/MovieCard/MovieCard';
import CastAndReviewsLayout from 'components/AdditionalInfoLinks/AdditionalInfoLinks';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'api/api-fetches'; 
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId, '')
      .then(data => {
        setMovieDetails(data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return !error ? (
    !isLoading ? (
      <div className={css.movieDetailsContainer}>
        <BackButton />
        <ul className={css.movieDetailsList}>
          <MovieCard
            movie={movieDetails}
            releaseYear={movieDetails.release_date}
            userScore={movieDetails.vote_average}
            overview={movieDetails.overview}
            genres={movieDetails.genres}
          />
        </ul>
        <CastAndReviewsLayout />
      </div>
    ) : (
      <Loader />
    )
  ) : (
    <h1>Sorry, no movie details for the selected movie.</h1>
  );
};

export default MovieDetails;
