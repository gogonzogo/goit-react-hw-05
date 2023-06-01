import css from './Reviews.module.css';
import useTmdbData from 'hooks/useTmdbData';
import AdditionalInfoCard from 'components/AdditionalInfoCard/AdditionalInfoCard';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { data, isLoading, error } = useTmdbData('reviews');

  return !error ? (
    !isLoading ? (
      <div className={css.reviewsDetailsContainer}>
        <ul className={css.reviewsDetails}>
          {data.results.map(review => (
            <AdditionalInfoCard
              key={review.id}
              avatarPath={review.author_details.avatar_path}
              author={review.author}
              reviewData={review.created_at}
              reviewContent={review.content}
              isLoading={isLoading}
            />
          ))}
        </ul>
      </div>
    ) : (
      <Loader />
    )
  ) : (
    <h5>No reviews at this time.</h5>
  );
};

export default Reviews;