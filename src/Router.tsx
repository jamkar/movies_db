import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/Home.page';
import MovieDetails from './pages/MovieDetails/MovieDetails.page';
import { useMemo, useState } from 'react';

export function Router() {
  const [query, setQuery] = useState<string>('');

  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: '/',
        element: <HomePage query={query} setQuery={setQuery} />,
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetails />,
      },
    ]);
  }, [query, setQuery]);

  return <RouterProvider router={router} />;
}
