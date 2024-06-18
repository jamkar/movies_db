import { API_BASE_URL, SEARCH_URL } from '../constants';
import { Movie, SearchResponse } from '../types';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDM4ZjUxMTE3NzFmZDQzMTcxODBlNTQwNDFjNGM0NyIsInN1YiI6IjVhYTE1MjEzOTI1MTQxNjBmNzAwOTA0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-pHWlLARzR0q8pfCD35jr7L6BMigUP7Ss6yyYDUuviA',
  },
};

export const search = async (
  query: string = '',
  page: number = 1,
): Promise<SearchResponse> => {
  const initialUrl = new URL(SEARCH_URL);
  const params = new URLSearchParams(initialUrl.search);
  params.append('query', query);
  params.append('page', page.toString());
  const url = new URL(`${initialUrl.origin}${initialUrl.pathname}?${params}`);

  const response = await fetch(url, options);
  return response.json();
};

export const getDetails = async (id: string): Promise<Movie> => {
  const url = `${API_BASE_URL}/movie/${id}`;
  const response = await fetch(url, options);
  return response.json();
};
