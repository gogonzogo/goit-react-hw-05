import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.headerNav}>
          <ul className={css.headerNavList}>
            <li id={css.headerNavItem}>
              <NavLink className={css.navLink} to="/">
                Home
              </NavLink>
            </li>
            <li id={css.headerNavItem}>
              <NavLink className={css.navLink} to="movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;