import { useEffect, useState } from "react";
import { StyledInfoDetail } from "./styled";
import Paypal from "./../../components/Paypal";
import { OnApproveData } from "@paypal/paypal-js/types/components/buttons";
import { useHistory } from "react-router-dom";

// interface Product {
//   id: number,
//   name: string,
//   price: number
// }
import Stripe from "./../../components/Stripe";

function InfoDetail() {
  const [product, setProduct] = useState({ name: "", id: 0, price: 0 });
  const [paid, setPaid] = useState(false);
  const history = useHistory();

  const url = "http://localhost:5000/api/product";
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, []);

  const onApprove = async (data: OnApproveData, actions: { order: any }) => {
    const order = await actions.order.capture();
    setPaid(true);
    console.log(order);
    if (order) {
      history.push("/checkout/success");
    }
  };

  return (
    <StyledInfoDetail>
      <div className="image-wrap">
        <img
          src={window.location.origin + "/images/product1.png"}
          className="product"
          alt="Product"
        />
      </div>
      <div className="info">
        <h1 className="title">{product.name}</h1>
        <p className="price">${product.price}</p>
        <div className="rating">
          <img
            src={window.location.origin + "/images/star.svg"}
            className="star"
            alt="star"
          />
          <img
            src={window.location.origin + "/images/star.svg"}
            className="star"
            alt="star"
          />
          <img
            src={window.location.origin + "/images/star.svg"}
            className="star"
            alt="star"
          />
          <img
            src={window.location.origin + "/images/star.svg"}
            className="star"
            alt="star"
          />
          <img
            src={window.location.origin + "/images/star.svg"}
            className="star"
            alt="star"
          />
        </div>
        <Stripe product={product} />
        <Paypal onApprove={onApprove} />
      </div>
    </StyledInfoDetail>
  );
}

export default InfoDetail;
