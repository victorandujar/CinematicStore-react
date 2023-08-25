export interface MovieCardStructue {
  poster_path: string;
  title: string;
  vote_average: string;
  release_date: string;
  id: string;
}

export type MoviesDataStructure = MovieCardStructue[];
