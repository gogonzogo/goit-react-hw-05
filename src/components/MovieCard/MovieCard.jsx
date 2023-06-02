import css from './MovieCard.module.css';
import { TMDB_API_CONFIG } from 'api/api-config';
import Loader from 'components/Loader/Loader';

const MovieCard = ({
  movie,
  releaseYear,
  userScore,
  overview,
  genres,
  isLoading,
}) => {
  const { IMG_BASE_URL, MOVIE_IMG_PLACEHOLDER_URL } = TMDB_API_CONFIG;
  const MOVIE_IMG_URL = `${IMG_BASE_URL}${movie.poster_path}`;

  const movieImg = movie => {
    if (movie.poster_path) {
      return MOVIE_IMG_URL;
    } else {
      return MOVIE_IMG_PLACEHOLDER_URL;
    }
  };

  return !isLoading ? (
    <>
      <li className={css.movieGalleryItem}>
        <img
          className={css.movieGalleryImg}
          src={movieImg(movie)}
          alt={movie.title}
          data-value={movie.id}
          width="200px"
        />
        <ul className={css.movieItemDetails}>
          {releaseYear && (
            <>
              <li className={css.movieGalleryDetailItem}>
                {movie.title || movie.original_name}
              </li>
              <li className={css.movieGalleryDetailItem}>
                {releaseYear.slice(0, 4)}
              </li>
            </>
          )}
          {userScore && (
            <li className={css.movieGalleryDetailItem}>
              User Score: {userScore}
            </li>
          )}
          {overview && (
            <li className={css.movieGalleryDetailItem}>{overview}</li>
          )}
          {genres && (
            <li className={css.movieGalleryDetailItem}>
              Genres:{' '}
              {genres.map(genre => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </li>
          )}
        </ul>
      </li>
    </>
  ) : (
    <Loader />
  );
};

export default MovieCard;
