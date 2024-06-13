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
}
