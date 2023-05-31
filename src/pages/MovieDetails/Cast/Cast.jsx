import css from './Cast.module.css';
import useTmdbData from 'hooks/useTmdbData';
import AdditionalInfoCard from 'components/AdditionalInfoCard/AdditionalInfoCard';
import Loader from 'components/Loader/Loader';


const Cast = () => {
  const { data, isLoading } = useTmdbData('cast');

  return !isLoading ? (
    <div className={css.castDetailsContainer}>
      <ul className={css.castDetails}>
        {data.cast.map(cast => (
          <AdditionalInfoCard
            key={cast.cast_id}
            profilePath={cast.profile_path}
            name={cast.name}
            character={cast.character}
            isLoading={isLoading}
          />
        ))}
      </ul>
    </div>
  ) : (
      <Loader />
  )
};

export default Cast;
