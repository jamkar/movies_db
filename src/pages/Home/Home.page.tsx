import { Pagination, TextInput } from '@mantine/core';
import { useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import useQueryValue from '../../hooks/useQueryValue';
import useSearchMovies from '../../hooks/useSearchMovies';
import { search } from '../../services/movieService';
import { SearchResponse } from '../../types';
import classes from './Home.module.scss';
import Layout from '../../components/Layout/Layout';

const ITEMS_PER_PAGE = 10;
const TMDB_ITEMS_PER_PAGE = 20;
const QUOTIENT = TMDB_ITEMS_PER_PAGE / ITEMS_PER_PAGE;

const HomePage = () => {
  const [activePage, setPage] = useState<number>(1);
  const [searchResponse, setSearchResponse] = useState<SearchResponse>();
  const { query, setQuery } = useQueryValue();
  useSearchMovies(query, setPage, setSearchResponse);

  const totalPages =
    (searchResponse &&
      Math.ceil(searchResponse?.total_results / ITEMS_PER_PAGE)) ??
    0;

  const getMovieItems = () => {
    const allMovies = searchResponse?.results ?? [];

    const items =
      activePage % 2 == 0
        ? allMovies?.slice(ITEMS_PER_PAGE)
        : allMovies?.slice(0, ITEMS_PER_PAGE);
    return items;
  };

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
        onChange={(event) => setQuery(event.target.value)}
        className={classes.input}
        mb="xl"
      />
      <MovieList items={getMovieItems()} />
      <Pagination
        total={totalPages}
        value={activePage}
        onChange={onPageChange}
        ml="auto"
        mr="auto"
        w="fit-content"
      />
    </Layout>
  );
};

export default HomePage;
