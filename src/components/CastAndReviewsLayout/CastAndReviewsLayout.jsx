import css from './CastAndReviewsLayout.module.css';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const CastAndReviewsLayout = () => {
  const { movieId } = useParams();

  return (
    <>
      <div className={css.additionalMovieInfo}>
        <p className={css.additionalMovieInfoTitle}>Additional information</p>
        <ul className={css.additionalMovieInfoList}>
          <li className={css.additionalMovieInfoListItem}>
            <NavLink to={`/movies/${movieId}/cast`} className={css.castLink}>
              Cast
            </NavLink>
          </li>
          <li className={css.additionalMovieInfoListItem}>
            <NavLink
              to={`/movies/${movieId}/reviews`}
              className={css.reviewLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default CastAndReviewsLayout;
