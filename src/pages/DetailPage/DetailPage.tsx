import { Link, useParams } from "react-router-dom";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { useQuery } from "react-query";
import useMovies from "../../hooks/useMovies/useMovies";
import DetailPageStyled from "./DetailPageStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../components/Loader/Loader";

const DetailPage = (): React.ReactElement => {
  const { getSingleMovie } = useMovies();
  const { id } = useParams();

  const { data, isFetching } = useQuery("movie", () => getSingleMovie(+id!), {
    enabled: Boolean(+id!),
  });

  return (
    <DetailPageStyled className="detail-page">
      <Link to={"/"} className="detail-page__back">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <div className="detail-page__card">
        {isFetching ? <Loader /> : <MovieDetail movie={data} />}
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
