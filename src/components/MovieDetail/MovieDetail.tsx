import { MovieDetailDataStructure } from "../../types/movie";
import MovieDetailStyled from "./MovieDetailStyled";
import TimerIcon from "@mui/icons-material/Timer";
import LanguageIcon from "@mui/icons-material/Language";
import TheatersIcon from "@mui/icons-material/Theaters";
import PublicIcon from "@mui/icons-material/Public";

interface DetailPageProps {
  movie: MovieDetailDataStructure;
}

const MovieDetail = ({ movie }: DetailPageProps): React.ReactElement => {
  return (
    <MovieDetailStyled className="detail-page">
      <main className="detail-page__details details">
        <div className="details__top-info">
          <div className="details__header">
            <div>
              <h2 className="details__title">{movie?.title}</h2>
              <span className="details__tagline">{movie?.tagline}</span>
            </div>
            <div className="details__movie-rate">
              <span className="details__votes">
                {movie?.vote_average?.toFixed(1)}
              </span>
              <span className="details__vote-number">
                {" "}
                ({movie?.vote_count})
              </span>
            </div>
          </div>
          <div className="details__release">
            <span className="details__status">{movie?.status}</span>
            <span className="details__info">
              {movie?.status === "Released" ? movie?.release_date : ""}
            </span>
          </div>
        </div>
        <div className="details__information">
          <img
            src={`${process.env.VITE_IMAGE_BASE_URL}${movie?.poster_path}`}
            className="details__image"
            alt="movie?.title"
            width="200"
            height="300"
          />
          <div className="details__movie-info">
            <div className="details__production-companies">
              {movie?.production_companies.map((company) => (
                <img
                  src={`${process.env.VITE_IMAGE_BASE_URL}${company?.logo_path}`}
                  alt="company?.name"
                  width="50"
                  height="20"
                  className="details__company-image"
                  key={company.name}
                />
              ))}
            </div>
            <div className="details__country-production">
              <PublicIcon />
              {movie?.production_countries.map((country) => (
                <span key={country.name}>{country.name}</span>
              ))}
            </div>
            <div className="details__overview">
              <h4 className="details__section-title">Overview</h4>
              <span className="details__overview-text">{movie?.overview}</span>
            </div>
            <div className="details__runtime">
              <TimerIcon />
              <span className="details__info">{movie?.runtime} minutes</span>
            </div>
            <div className="details__language">
              <LanguageIcon />
              {movie?.spoken_languages.map((language) => (
                <span className="details__info" key={language.english_name}>
                  {language?.english_name}
                </span>
              ))}
            </div>
            <div className="details__genres">
              <TheatersIcon />
              {movie?.genres.map((genre) => (
                <span className="details__info" key={genre.name}>
                  {genre?.name}
                </span>
              ))}
            </div>
            <a href="movie?.homepage">{movie?.homepage}</a>
          </div>
        </div>
      </main>
    </MovieDetailStyled>
  );
};

export default MovieDetail;
