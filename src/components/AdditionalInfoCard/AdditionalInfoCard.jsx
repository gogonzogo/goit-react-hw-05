import css from './AdditionalInfoCard.module.css';
import Loader from 'components/Loader/Loader';

const AdditionalInfoCard = ({
  profilePath,
  name,
  character,
  author,
  reviewDate,
  reviewContent,
  isLoading,
}) => {
  return !isLoading ? (
    <li className={css.castGalleryItem}>
      {profilePath && (
        <img
          className={css.castGalleryImg}
          src={`https://image.tmdb.org/t/p/w500${profilePath}`}
          alt={name}
          width="200px"
        />
      )}
      <p className={css.castGalleryTitle}>{name || author}</p>
      {character && <p className={css.castGalleryText}>{character}</p>}
      {reviewDate && <p className={css.castGalleryText}>{reviewDate}</p>}
      {reviewContent && <p className={css.castGalleryText}>{reviewContent}</p>}
    </li>
  ) : (
    <Loader />
  );
};

export default AdditionalInfoCard