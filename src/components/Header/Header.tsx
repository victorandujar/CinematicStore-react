import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">Cinematic Store</h1>
      <img
        src="/logo.png"
        alt="Cinematic Store logo"
        width={50}
        height={50}
        className="header__logo"
      />
    </HeaderStyled>
  );
};

export default Header;
