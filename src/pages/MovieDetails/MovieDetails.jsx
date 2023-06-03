import css from './MovieDetails.module.css';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'api/api-fetches';
import { useState, useEffect, Suspense, lazy } from 'react';
import {
  useParams,
  useLocation,
  NavLink,
  Route,
  Routes,
  Link,
} from 'react-router-dom';

const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

const MovieDetails = () => {
  const [data, setData] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId, '')
      .then(data => {
        setMovieDetails(data);
        setData(data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  const path = location?.state?.from ?? '/';

  return !isLoading ? (
    !error && data && movieDetails.id ? (
      <div className={css.movieDetailsContainer}>
        <Link to={path}>Go Back</Link>
        <ul className={css.movieDetailsList}>
          <MovieCard
            movie={movieDetails}
            releaseYear={movieDetails.release_date}
            userScore={movieDetails.vote_average}
            overview={movieDetails.overview}
            genres={movieDetails.genres}
          />
        </ul>
        <div className={css.additionalMovieInfo}>
          <p className={css.additionalMovieInfoListItem}>
            <NavLink
              className={css.castLink}
              to={`cast`}
              state={{ from: path }}
            >
              Cast
            </NavLink>
          </p>
          <p className={css.additionalMovieInfoListItem}>
            <NavLink
              className={css.reviewLink}
              to={`reviews`}
              state={{ from: path }}
            >
              Reviews
            </NavLink>
          </p>
        </div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<Cast movieId={movieId} />} />
            <Route path="reviews" element={<Reviews movieId={movieId} />} />
          </Routes>
        </Suspense>
      </div>
    ) : (
      <h1>Sorry, no movie details for the selected movie.</h1>
    )
  ) : (
    <Loader />
  );
};

export default MovieDetails;
