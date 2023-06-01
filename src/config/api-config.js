export const getTmdbApiEndpoint = (movieId, fetchCategory, userQuery) => {
  const TRENDING_URL = '/trending/all/day';
  const SEARCH_URL = `/search/movie?query=${userQuery}`;
  const DETAILS_URL = `/movie/${movieId}`;
  const CAST_URL = `/movie/${movieId}/credits`;
  const REVIEWS_URL = `/movie/${movieId}/reviews`;

  switch (fetchCategory) {
    case 'trending':
      return TRENDING_URL;
    case 'search':
      return SEARCH_URL;
    case 'details':
      return DETAILS_URL;
    case 'cast':
      return CAST_URL;
    case 'reviews':
      return REVIEWS_URL;
    default:
      return;
  }
};

export const TMDB_API_CONFIG = {
  API_KEY: '5d8e08b77a668b368d7194faf94b14f5',
  BASE_URL: 'https://api.themoviedb.org/3',
  IMG_BASE_URL: 'https://image.tmdb.org/t/p/w500',
  MOVIE_IMG_PLACEHOLDER_URL: 'https://placehold.jp/84848b/ffffff/200x300.jpg?text=Movie%20Poster%20Unavailable',
  CAST_IMG_PLACEHOLDER_URL: 'https://placehold.jp/95959d/ffffff/80x120.png?text=NO%20IMAGE%20AVAILABLE',
};