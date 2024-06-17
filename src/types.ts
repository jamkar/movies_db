import { Dispatch, SetStateAction } from 'react';

export interface SearchResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Query {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}
