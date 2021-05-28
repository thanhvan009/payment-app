import { loadStripe } from "@stripe/stripe-js";
import { StyledStripe } from "./styled";
import { APP_URL, API_URL, STRIPE_PUBLIC_KEY } from "./../../constants/index";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface StripeUrls {
  successUrl: string;
  cancelUrl: string;
}

interface StripeCheckoutRequest {
  product: Product;
  urls: StripeUrls;
}

function Stripe(props: { product: Product }) {
  const { product } = props;
  const successUrl = APP_URL + "checkout/success";
  const cancelUrl = APP_URL;
  let request: StripeCheckoutRequest = {
    product,
    urls: {
      successUrl,
      cancelUrl,
    },
  };

  const checkoutUrl = API_URL + "checkout";

  const onClickPayment = async () => {
    const stripe = await loadStripe(STRIPE_PUBLIC_KEY);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    };

    fetch(checkoutUrl, requestOptions)
      .then(function (response) {
        return response.json();
      })
      .then(function (session) {
        return stripe?.redirectToCheckout({ sessionId: session.id });
      })
      .then(function (result) {
        // If redirectToCheckout fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using error.message.
        if (result?.error) {
          alert(result.error.message);
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };
  return (
    <StyledStripe onClick={onClickPayment}>Checkout with Stripe</StyledStripe>
  );
}

export default Stripe;
