import {
  MovieCardStructue,
  MovieDetailDataStructure,
  MoviesDataStructure,
} from "../types/movie";

export const movieMockAvatar: MovieCardStructue = {
  title: "Avatar: El sentido del agua",
  poster_path:
    "https://musicart.xboxlive.com/7/4f616500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  release_date: "2022/12/12",
  vote_average: 7.2,
  id: 330949,
};

export const movieMockSpiderman: MovieCardStructue = {
  title: "Spiderman 2",
  poster_path:
    "https://musicart.xboxlive.com/7/4f616500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  release_date: "2022/12/12",
  vote_average: 7.2,
  id: 329489324,
};

export const moviesMock: MoviesDataStructure = [
  movieMockAvatar,
  movieMockSpiderman,
];

export const mockMovieDetail: MovieDetailDataStructure = {
  genres: [
    {
      name: "Drama",
    },
  ],
  homepage: "http://www.oppenheimermovie.com",
  id: 872585,
  overview:
    "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",

  poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  production_companies: [
    {
      logo_path: "/3tvBqYsBhxWeHlu62SIJ1el93O7.png",
      name: "Syncopy",
    },
  ],
  production_countries: [
    {
      name: "United Kingdom",
    },
  ],
  release_date: "2023-07-19",

  spoken_languages: [
    {
      english_name: "Dutch",
    },
  ],
  status: "Released",
  tagline: "The world forever changes.",
  title: "Oppenheimer",
  runtime: 120,
  vote_average: 8.275,
  vote_count: 2499,
};
