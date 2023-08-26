import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 2;
  width: 100%;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, #8a2be2, #00ffff);
  border-image-slice: 1;
  background-color: black;

  .header {
    &__title {
      font-size: 25px;
    }

    &__logo {
      width: 40px;
      height: 40px;
    }
  }
`;

export default HeaderStyled;
