import css from './MovieDetails.module.css';
import useTmdbData from 'hooks/useTmdbData';
import MovieCard from 'components/MovieCard/MovieCard';
import CastAndReviewsLayout from 'layouts/CastAndReviewsLayout/CastAndReviewsLayout';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { data, isLoading, error } = useTmdbData('details');
  const movie = data;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return !error ? (
    !isLoading ? (
      <div className={css.movieDetailsContainer}>
        <button className={css.movieDetailsButton} onClick={handleBackClick}>
          Go Back
        </button>
        <ul className={css.movieDetailsList}>
          <MovieCard
            movie={movie}
            releaseYear={movie.release_date}
            userScore={movie.vote_average}
            overview={movie.overview}
            genres={movie.genres}
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
