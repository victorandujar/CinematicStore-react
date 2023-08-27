export interface MovieCardStructue {
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  id: number;
}

export type MoviesDataStructure = MovieCardStructue[];

export interface MovieDetailDataStructure extends MovieCardStructue {
  tagline: string;
  vote_count: number;
  status: string;
  overview: string;
  runtime: number;
  homepage: string;
  production_companies: [
    {
      logo_path: string;
      name: string;
    },
  ];
  production_countries: [
    {
      name: string;
    },
  ];
  spoken_languages: [
    {
      english_name: string;
    },
  ];
  genres: [
    {
      name: string;
    },
  ];
}
