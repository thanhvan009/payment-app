import { loadStripe } from "@stripe/stripe-js";
import { StyledStripe } from "./styled";

interface Product {
  id: number;
  name: string;
  price: number;
}

function Stripe(props: { product: Product }) {
  const { product } = props;

  const checkoutUrl = "http://localhost:5000/api/checkout";

  const onClickPayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51IuZBIEtUd2UpeaGTbiK46UrBcqQBB3FhR0n9DTa043igqPMFRG5T0YZ2v9rmEljn7e5OO8YYbf5udQpZFWtUpo400TZZjrxLY"
    );

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
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
