import css from "./RootLayout.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader/Loader";

const RootLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.headerNav}>
          <ul className={css.headerNavList}>
            <li id={css.headerNavItem}>
              <NavLink className={css.navLink} to="/">Home</NavLink>
            </li>
            <li id={css.headerNavItem}>
              <NavLink className={css.navLink} to="movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default RootLayout;