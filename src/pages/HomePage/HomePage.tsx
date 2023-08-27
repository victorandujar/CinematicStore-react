import { useQuery } from "react-query";
import MovieCardList from "../../components/MovieCardList/MovieCardList";
import useMovies from "../../hooks/useMovies/useMovies";
import HomePageStyled from "./HomePageStyled";
import Loader from "../../components/Loader/Loader";

const HomePage = (): React.ReactElement => {
  const { getPopularMovies } = useMovies();
  const { data, isFetching } = useQuery("rides", getPopularMovies);

  return (
    <HomePageStyled>
      {isFetching ? <Loader /> : <MovieCardList movies={data} />}
    </HomePageStyled>
  );
};

export default HomePage;
