import { Link } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="notfound-page">
      <h2 className="notfound-page__title">404</h2>
      <span className="notfound-page__text">
        Uh oh! Looks like you got lost. Go back to the homepage if you dare!
      </span>
      <Link to={"/"}>
        <button className="notfound-page__back-home">Go back home!</button>
      </Link>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
