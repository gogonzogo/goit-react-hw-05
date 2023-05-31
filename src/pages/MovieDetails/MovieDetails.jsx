import css from './MovieDetails.module.css';
import useTmdbData from 'hooks/useTmdbData';
import MovieCard from 'components/MovieCard/MovieCard';
import CastAndReviewsLayout from 'layouts/CastAndReviewsLayout/CastAndReviewsLayout';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { data, isLoading } = useTmdbData('details');
  const movie = data;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return !isLoading ? (
    <div className={css.movieDetailsContainer}>
      <button onClick={handleBackClick}>Go Back</button>
      <ul className={css.movieDetails}>
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
  );
};

export default MovieDetails;
