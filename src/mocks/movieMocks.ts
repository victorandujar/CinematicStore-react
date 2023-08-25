import { MovieCardStructue, MoviesDataStructure } from "../types/movie";

export const movieMockAvatar: MovieCardStructue = {
  title: "Avatar: El sentido del agua",
  poster_path:
    "https://musicart.xboxlive.com/7/4f616500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  release_date: "2022/12/12",
  vote_average: "7.2",
  id: "330949",
};

export const movieMockSpiderman: MovieCardStructue = {
  title: "Spiderman 2",
  poster_path:
    "https://musicart.xboxlive.com/7/4f616500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  release_date: "2022/12/12",
  vote_average: "7.2",
  id: "329489324",
};

export const moviesMock: MoviesDataStructure = [
  movieMockAvatar,
  movieMockSpiderman,
];
