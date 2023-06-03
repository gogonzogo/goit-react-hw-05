import css from './Reviews.module.css';
import AdditionalInfoCard from 'components/AdditionalInfoCard/AdditionalInfoCard';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'api/api-fetches';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [data, setData] = useState(null);
  const [reviewDetails, setReviewDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId, '/reviews')
      .then(data => {
        setReviewDetails(data.results);
        setData(data);
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return !isLoading ? (
    !error && data && reviewDetails.length > 0 ? (
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
      <h5>No reviews at this time.</h5>
    )
  ) : (
    <Loader />
  );
};

export default Reviews;
