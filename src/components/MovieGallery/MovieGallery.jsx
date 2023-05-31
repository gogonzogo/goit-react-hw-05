import css from './MovieGallery.module.css';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';

const MovieGallery = ({ movies, isLoading }) => {
  const navigate = useNavigate();

  const handleClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    } else {
      const movieId = e.target.dataset.value;
      navigate(`/movies/${movieId}`);
    }
  };

  if (!movies) {
    return;
  }
  return !isLoading ? (
    <ul className={css.movieGallery} onClick={handleClick}>
      {movies.results.map(movie => (
        <MovieCard movie={movie} key={movie.id} isLoading={isLoading} />
      ))}
    </ul>
  ) : (
    <Loader />
  );
};

export default MovieGallery;
