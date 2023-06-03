import css from './Reviews.module.css';
import AdditionalInfoCard from 'components/AdditionalInfoCard/AdditionalInfoCard';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'api/api-fetches';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewDetails, setReviewDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId, '/reviews')
      .then(data => setReviewDetails(data.results))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return !error ? (
    !isLoading ? (
      <div className={css.reviewsDetailsContainer}>
        <ul className={css.reviewsDetails}>
          {reviewDetails.map(review => (
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