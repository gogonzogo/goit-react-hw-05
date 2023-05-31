import css from './MovieCard.module.css';
import { TMDB_API_CONFIG } from 'config/api-config';
import Loader from 'components/Loader/Loader';  

const MovieCard = ({ movie, releaseYear, userScore, overview, genres, isLoading }) => {
  const { IMG_BASE_URL, IMG_PLACEHOLDER_URL } = TMDB_API_CONFIG;
  const MOVIE_IMG_URL = `${IMG_BASE_URL}${movie.poster_path}`
 
  const movieImg = (movie) => {
    if (movie.poster_path) {
      return MOVIE_IMG_URL
    } else {
      return IMG_PLACEHOLDER_URL
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
        <p className={css.movieGalleryTitle}>
          {movie.title || movie.original_name}
        </p>
        {releaseYear && (
          <p className={css.movieGalleryText}>{releaseYear.slice(0, 4)}</p>
        )}
        {userScore && (
          <p className={css.movieGalleryText}>User Score: {userScore}</p>
        )}
        {overview && <p className={css.movieGalleryText}>{overview}</p>}
        {genres && (
          <p className={css.movieGalleryText}>
            Genres:{' '}
            {genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        )}
      </li>
    </>
  ) : (
      <Loader/>
  )
};

export default MovieCard;