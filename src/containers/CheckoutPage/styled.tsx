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
    Button {
      margin: 10px;
      :hover  {
        font-size: 16px;
      }
      :active {
        background-color: red;
      }
    }
  }
`;
