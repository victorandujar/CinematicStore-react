import { useQuery } from "react-query";
import MovieCardList from "../../components/MovieCardList/MovieCardList";
import useMovies from "../../hooks/useMovies/useMovies";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  const { getPopularMovies } = useMovies();
  const movies = useQuery("rides", getPopularMovies);

  return (
    <HomePageStyled>
      <MovieCardList movies={movies.data} />
    </HomePageStyled>
  );
};

export default HomePage;
