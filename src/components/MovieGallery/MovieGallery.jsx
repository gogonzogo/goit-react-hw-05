import css from './MovieGallery.module.css';
import { useLocation, Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';

const MovieGallery = ({ movies, isLoading }) => {
  const location = useLocation();

  if (!movies) {
    return;
  }
  return !isLoading ? (
    <ul className={css.movieGallery}>
      {movies.map(movie => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          state={{ from: location.pathname + location.search }}
        >
          <MovieCard movie={movie} isLoading={isLoading} />
        </Link>
      ))}
    </ul>
  ) : (
    <Loader />
  );
};

export default MovieGallery;
