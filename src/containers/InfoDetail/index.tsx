import { useEffect, useState } from 'react';
import { StyledInfoDetail } from './styled';
import { loadStripe } from '@stripe/stripe-js';

// interface Product {
//   id: number,
//   name: string,
//   price: number
// }

function InfoDetail() {
  const [product, setProduct] = useState({name: '', id: 0, price: 0});
  const url = "http://localhost:5000/api/product";
  const checkoutUrl = "http://localhost:5000/api/checkout";
  useEffect(()=>{
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [])

  const onClickPayment = async () => {
    const stripe = await loadStripe("pk_test_51IuZBIEtUd2UpeaGTbiK46UrBcqQBB3FhR0n9DTa043igqPMFRG5T0YZ2v9rmEljn7e5OO8YYbf5udQpZFWtUpo400TZZjrxLY");

    fetch(checkoutUrl, {method:"POST"}).then(function (response) {
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
  }

  return (
    <StyledInfoDetail>
      <div className="image-wrap">
        <img src={window.location.origin  + '/images/product1.png'} className="product" alt="Product" />
      </div>
      <div className="info">
        <h1 className="title">{product.name}</h1>
        <p className="price">${product.price}</p>
        <div className="rating">
          <img src={window.location.origin  + '/images/star.svg'} className="star" alt="star" />
          <img src={window.location.origin  + '/images/star.svg'} className="star" alt="star" />
          <img src={window.location.origin  + '/images/star.svg'} className="star" alt="star" />
          <img src={window.location.origin  + '/images/star.svg'} className="star" alt="star" />
          <img src={window.location.origin  + '/images/star.svg'} className="star" alt="star" />
        </div>
        <button onClick={onClickPayment} className="pay-btn">Pay</button>
      </div>
    </StyledInfoDetail>
  );
}

export default InfoDetail;