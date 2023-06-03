import css from './Home.module.css';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { getTrendingMovies } from 'api/api-fetches';
import { useState, useEffect } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section>
      <h1 className={css.trendingTitle}>Trending Today</h1>
      <MovieGallery movies={trendingMovies} isLoading={isLoading} error={error}/>
    </section>
  );
};

export default Home;
