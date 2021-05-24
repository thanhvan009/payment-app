import styled from "styled-components";

export const StyledProductDetail = styled.div`
  .product-detail__container {
    height: 600px;
    background-color: #f5f5f5;
  }

  .product-detail__content {
    height: 100%;
    width: 60%;
    margin: auto;
    background-color: #ffffff;
    display: flex;
  }

  .product-detail__left-content {
    flex-basis: 40%;
    height: 100%;
  }

  .product-detail__image {
    height: 60%;
    background-image: url("https://cf.shopee.vn/file/8d9ee45ae30c54c2aa640f7a80f5596d");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    margin: 20px;
  }

  .product-detail__right-content {
    flex-basis: 60%;
    height: 100%;
    margin: 20px;
  }

  .product-detail__title {
    font-size: 20px;
    font-weight: bold;
  }

  .product-detail__price {
    margin-top: 30px;
    padding: 15px;
    width: auto;
    background-color: #fafafa;
    height: auto;
    font-size: 18px;

    span {
      color: red;
      font-weight: bold;
    }
  }

  .product-detail__info {
    margin-top: 30px;
    padding: 0 20px;
  }

  .product-detail__payment {
    margin-top: 30px;
    padding: 0 20px;
    button {
      font-size: 14px;
      height: 40px;
      width: 200px;
      font-weight: bold;
      text-transform: uppercase;
      padding: 10px;
      background-color: #f73434;
      border: none;
      cursor: pointer;
      outline: none;
      color: white;
      :hover {
        background-color: #ff5e5e;
      }
      :active {
        background-color: #c40000;
      }
    }
  }
`;
