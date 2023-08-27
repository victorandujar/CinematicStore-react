import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MovieCardStyled from "./MovieCardStyled";
import { MovieCardStructue } from "../../types/movie";

interface MovieCardProps {
  movie: MovieCardStructue;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        height={200}
        image={`${process.env.VITE_IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        sx={{ height: 430, width: 320, objectFit: "cover" }}
      />
      <CardContent>
        <Typography
          variant="h2"
          color="text.primary"
          fontWeight={900}
          fontSize={15}
          height={40}
        >
          {movie.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display={"flex"}
          gap={0.5}
        >
          <MovieCardStyled className="card__released">
            Released:
          </MovieCardStyled>
          {movie.release_date}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: 3,
          paddingLeft: 0,
          paddingTop: 0,
        }}
      >
        <CardContent>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardContent>
        <CardContent
          className="card__rate"
          sx={{
            background: "linear-gradient(to bottom right, #8a2be2, #00ffff)",
            width: 45,
            height: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <Typography
            fontWeight={900}
            fontSize={18}
            paddingTop={1}
            color={"#fff"}
          >
            {movie.vote_average}
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
