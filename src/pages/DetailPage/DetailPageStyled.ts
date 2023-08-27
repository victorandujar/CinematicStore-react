import { styled } from "styled-components";

const DetailPageStyled = styled.div`
  padding: 90px 0px;
  display: flex;

  .detail-page {
    &__card {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    &__back {
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }

    &__back-text {
      font-weight: 700;
    }
  }
`;

export default DetailPageStyled;
