import css from './Home.module.css';
import useTmdbData from 'api/useTmdbData';
import MovieGallery from 'components/MovieGallery/MovieGallery';

const Home = () => {
  const { data, isLoading } = useTmdbData(`trending`);

  return (
    <div>
      <h1 className={css.trendingTitle}>Trending Today</h1>
      <MovieGallery movies={data} isLoading={isLoading} />
    </div>
  );
};

export default Home;
