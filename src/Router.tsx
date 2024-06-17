import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/Home.page';
import MovieDetails from './pages/MovieDetails/MovieDetails.page';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/movies/:movieId',
      element: <MovieDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}
