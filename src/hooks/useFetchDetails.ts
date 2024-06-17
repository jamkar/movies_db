import { useEffect, useState } from 'react';
import { Movie } from '../types';
import { getDetails } from '../services/movieService';

const useFetchDetails = (movieId?: string) => {
  const [details, setDetails] = useState<Movie>();

  useEffect(() => {
    (async (movieId) => {
      if (movieId) {
        const movieDetails = await getDetails(movieId);
        setDetails(movieDetails);
      }
    })(movieId);
  }, [movieId]);

  return details;
};

export default useFetchDetails;
