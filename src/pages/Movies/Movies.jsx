import css from './Movies.module.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'api/api-fetches';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchComplete, setSearchComplete] = useState(false);

  const handleSubmit = userInput => {
    if (!userInput) {
      return;
    }
    setSearchParams({ query: userInput });
  };

  useEffect(() => {
    let query = searchParams.get('query');
    if (!query) {
      return;
    }
    setIsLoading(true);
    getSearchMovies(query)
      .then(data => setSearchedMovies(data.results))
      .catch(err => setError(err))
      .finally(() => {
        setIsLoading(false);
        setSearchComplete(true);
      });
  }, [searchParams]);

  return (
    <div className={css.movieSearchContainer}>
      <SearchForm onSubmit={handleSubmit} />
      {searchComplete && searchedMovies.length < 1 && !error ? (
        <h1>No movies match search</h1>
      ) : (
        <>
          <MovieGallery movies={searchedMovies} isLoading={isLoading} />
        </>
      )}
    </div>
  );
};

export default Movies;
