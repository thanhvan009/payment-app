import styled from "styled-components";

export const StyledCheckoutPage = styled.div`
  h1 {
    text-align: center;
  }

  .checkout-page__product-detail {
    margin: auto;
    height: 100%;
    text-align: center;
  }

  .checkout-page__product-image {
    height: 400px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .checkout-page__product-price {
    color: red;
    font-weight: bold;
    margin-top: 20px;
  }

  .checkout-page__payment-method {
    button {
      background-color: #ff5a5a;
      color: white;
      height: 30px;
      width: 120px;
      margin: 10px;
      border: none;
      outline: none;
      cursor: pointer;
      :hover  {
        font-size: 16px;
      }
      :active {
        background-color: red;
      }
    }
  }
`;
