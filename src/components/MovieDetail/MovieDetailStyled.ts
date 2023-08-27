import { styled } from "styled-components";

const MovieDetailStyled = styled.div`
  background-color: #3c3c3c;
  width: 70%;
  border-radius: 10px;

  .detail-page {
    &__back-icon {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    &__back-text {
      font-weight: 700;
    }
  }

  .details {
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 10px;

    &__top-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__header {
      display: flex;
      align-items: flex-start;
      gap: 40px;
    }

    &__title {
      font-weight: 700;
      font-size: 25px;
    }

    &__movie-rate {
      display: flex;
      gap: 8px;
      align-items: center;
      width: 200px;
    }

    &__votes {
      font-weight: 700;
      font-size: 20px;
      width: 40px;
      height: 40px;
      padding: 5px;
      background: linear-gradient(to bottom right, #8a2be2, #00ffff);
      border-radius: 5px;
    }

    &__vote-number {
      font-size: 12px;
    }

    &__release {
      display: flex;
      align-items: flex-end;
      gap: 10px;
    }

    &__status {
      font-weight: 700;
    }

    &__image {
      width: 250px;
      height: 400px;
      object-fit: cover;
      border-radius: 7px;
    }

    &__information {
      display: flex;
      gap: 40px;
    }

    &__movie-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 20px;
      width: 500px;
    }

    &__section-title {
      font-weight: 600;
      font-size: 18px;
      border-bottom: 2px solid transparent;
      border-image: linear-gradient(to right, #8a2be2, #00ffff);
      border-image-slice: 1;
      padding: 5px 0;
    }

    &__info {
      font-size: 13px;
    }

    &__production-companies {
      display: flex;
      gap: 20px;
    }

    &__country-production {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__company-image {
      object-fit: contain;
    }

    &__language,
    &__genres,
    &__runtime {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__overview {
      font-size: 15px;
    }

    a {
      color: #00ffff;
    }
  }
`;
export default MovieDetailStyled;
