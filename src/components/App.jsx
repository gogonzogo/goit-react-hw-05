import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() =>
  import('../pages/MovieDetails/Reviews/Reviews')
);
const RootLayout = lazy(() => import('../layouts/RootLayout/RootLayout'));
const CastAndReviewsLayout = lazy(() =>
  import('../layouts/CastAndReviewsLayout/CastAndReviewsLayout')
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route element={<CastAndReviewsLayout />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
