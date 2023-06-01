import css from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={css.notFoundPage}>
      <h1 className={css.notFoundTitle}>404 Page Not Found</h1>
      <Link to="/" className={css.homeLink}>
        Click Here to return to Home
      </Link>
    </div>
  );
}

export default NotFound;