import { MoviesDataStructure } from "../../types/movie";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardListStyled from "./MovieCardListStyled";

interface MovieCardListProps {
  movies: MoviesDataStructure;
}

const MovieCardList = ({ movies }: MovieCardListProps): React.ReactElement => {
  return (
    <MovieCardListStyled>
      {movies?.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </MovieCardListStyled>
  );
};

export default MovieCardList;
