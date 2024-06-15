import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/Home.page';
import MovieDetails from './pages/MovieDetails/MovieDetails.page';

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

export function Router() {
  return <RouterProvider router={router} />;
}
