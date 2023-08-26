import { useQuery } from "react-query";
import Header from "./components/Header/Header";
import useMovies from "./hooks/useMovies/useMovies";
import MovieCardList from "./components/MovieCardList/MovieCardList";

const App = () => {
  const { getPopularMovies } = useMovies();
  const movies = useQuery("rides", getPopularMovies);

  return (
    <>
      <Header />
      <MovieCardList movies={movies.data} />
    </>
  );
};

export default App;
