import { styled } from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  margin: 0;
  padding: 50px;

  .notfound-page {
    &__title {
      font-size: 100px;
      font-weight: 900;
    }

    &__back-home {
      background-color: #fff;
      width: 120px;
      height: 30px;
      border-radius: 5px;
      font-weight: 700;
    }
  }
`;

export default NotFoundPageStyled;
