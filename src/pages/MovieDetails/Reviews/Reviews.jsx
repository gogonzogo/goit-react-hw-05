import css from './Reviews.module.css';
import useTmdbData from 'hooks/useTmdbData';
import AdditionalInfoCard from 'components/AdditionalInfoCard/AdditionalInfoCard';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { data, isLoading } = useTmdbData('reviews');

  return !isLoading ? (
    <div className={css.reviewsDetailsContainer}>
      <ul className={css.reviewsDetails}>
        {data.results.map(review => (
          <AdditionalInfoCard
            key={review.id}
            avatarPath={review.author_details.avatar_path}
            author={review.author}
            reviewData={review.created_at}
            reviewContent={review.content}
          />
        ))}
      </ul>
    </div>
  ) : (
    <Loader />
  );
};

export default Reviews;
