import css from './Cast.module.css';
import useTmdbData from 'api/useTmdbData';
import AdditionalInfoCard from 'components/AdditionalInfoCard/AdditionalInfoCard';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { data, isLoading, error } = useTmdbData('cast');

  return !error ? (
    !isLoading ? (
      <div className={css.castDetailsContainer}>
        <ul className={css.castDetailsList}>
          {data.cast.map(cast => (
            <AdditionalInfoCard
              className={css.castItem}
              key={cast.cast_id}
              profilePath={cast.profile_path}
              name={cast.name}
              character={cast.character}
              isLoading={isLoading}
              error={error}
            />
          ))}
        </ul>
      </div>
    ) : (
      <Loader />
    )
  ) : (
    <h5>Sorry, no cast details at this time.</h5>
  );
};

export default Cast;
