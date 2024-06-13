import { TextInput } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { searchMovies } from '../services/searchMovies';
import { Pagination } from '@mantine/core';
import { Movie, SearchResponse } from '../types';
import Cards from '../components/Cards';

const ITEMS_PER_PAGE = 10;

export function HomePage() {
  const [searchResponse, setSearchResponse] = useState<SearchResponse>();
  const [activePage, setPage] = useState(1);

  const handleSearch = useDebouncedCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const response = await searchMovies(value);
      setSearchResponse(response);
    },
    300,
  );

  // const totalMovies = searchResponse?.length ?? 0;

  const totalPages =
    searchResponse &&
    (searchResponse?.total_pages * searchResponse?.results.length) /
      ITEMS_PER_PAGE;

  console.log('totalPages: ', totalPages);

  return (
    <>
      <TextInput
        placeholder="Search movies..."
        defaultValue=""
        onChange={handleSearch}
      />
      <div>Movies count: {searchResponse?.total_results}</div>
      <Cards movies={searchResponse?.results ?? []} />
      <Pagination
        total={totalPages ?? 0}
        value={activePage}
        onChange={setPage}
        mt="sm"
      />
    </>
  );
}
