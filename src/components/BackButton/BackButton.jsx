import css from './BackButton.module.css';
import { Link, useLocation } from 'react-router-dom';

const BackButton = ({ onClick }) => {
  const location = useLocation();

  const getBackPath = () => {
    let path = location.pathname;
    let newPath;

    if (path.includes('?query=')) {
      newPath = '/movies';
    }
    if (path.includes('/movie')) {
      newPath = '/';
    }
    return newPath;
  };

  const newPath = getBackPath();

  return <Link className={css.backButton} to={newPath}>Go Back</Link>;
};

export default BackButton;
