import { styled } from "styled-components";

const MovieCardListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
  justify-items: center;
`;

export default MovieCardListStyled;
