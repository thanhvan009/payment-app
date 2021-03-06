import { StyledCheckoutPage } from "./styled";
import Layout from "../../components/Layout";

function CheckoutPage(props: any) {
  console.log(props);
  return (
    <Layout>
      <StyledCheckoutPage>
        <h1>Checkout Page</h1>
        <div className="checkout-page__product-detail">
          <h3>{props.location.state.title}</h3>
          <div
            className="checkout-page__product-image"
            style={{
              backgroundImage: `url("${props.location.state.imgUrl}")`,
            }}
          ></div>
          <div className="checkout-page__product-price">
            {props.location.state.price}
          </div>
          <div className="checkout-page__payment-method">
            <button>Paypal</button>
            <button>Stripe</button>
          </div>
        </div>
      </StyledCheckoutPage>
    </Layout>
  );
}

export default CheckoutPage;
