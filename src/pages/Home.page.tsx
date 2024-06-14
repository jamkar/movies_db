import { Pagination, TextInput } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import MovieList from '../components/MovieList/MovieList';
import { search } from '../services/movieService';
import { SearchResponse } from '../types';
import Layout from '../components/Layout/Layout';

const ITEMS_PER_PAGE = 10;
const TMDB_ITEMS_PER_PAGE = 20;
const QUOTIENT = TMDB_ITEMS_PER_PAGE / ITEMS_PER_PAGE;

const HomePage = () => {
  const [activePage, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [searchResponse, setSearchResponse] = useState<SearchResponse>();

  const totalPages =
    (searchResponse &&
      Math.ceil(searchResponse?.total_results / ITEMS_PER_PAGE)) ??
    0;

  const getMovieItems = () => {
    const allMovies = searchResponse?.results ?? [];

    const items =
      activePage % 2 == 0 ? allMovies?.slice(10) : allMovies?.slice(0, 10);
    return items;
  };

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    handleSearch(searchQuery);
  };

  const handleSearch = useDebouncedCallback(async (searchQuery: string) => {
    const response = await search(searchQuery);
    setSearchResponse(response);
    setPage(1);
  }, 300);

  const onPageChange = async (page: number) => {
    setPage(page);
    const pageParam = Math.ceil(page / QUOTIENT);
    const response = await search(query, pageParam);
    setSearchResponse(response);
  };

  return (
    <Layout>
      <TextInput
        placeholder="Search movies..."
        value={query}
        onChange={onSearchChange}
      />
      <MovieList items={getMovieItems()} />
      <Pagination
        total={totalPages}
        value={activePage}
        onChange={onPageChange}
        mt="sm"
      />
    </Layout>
  );
};

export default HomePage;
