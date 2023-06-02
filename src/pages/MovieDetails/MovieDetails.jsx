import css from './MovieDetails.module.css';
import useTmdbData from 'hooks/useTmdbData';
import BackButton from 'components/BackButton/BackButton';
import MovieCard from 'components/MovieCard/MovieCard';
import CastAndReviewsLayout from 'layouts/CastAndReviewsLayout/CastAndReviewsLayout';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { data, isLoading, error } = useTmdbData('details');
  const movie = data;

  return !error ? (
    !isLoading ? (
      <div className={css.movieDetailsContainer}>
        <BackButton />
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
