import { Dispatch, SetStateAction, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { search } from '../services/movieService';
import { SearchResponse } from '../types';

const useSearchMovies = (
  query: string,
  setPage: Dispatch<SetStateAction<number>>,
  setSearchResponse: Dispatch<SetStateAction<SearchResponse | undefined>>,
) => {
  const handleSearch = useDebouncedCallback(async (searchQuery: string) => {
    const response = await search(searchQuery);
    setSearchResponse(response);
    setPage(1);
  }, 300);

  useEffect(() => {
    (async (query, handleSearch) => {
      if (query) {
        handleSearch(query);
      }
    })(query, handleSearch);
  }, [query, handleSearch]);
};

export default useSearchMovies;
