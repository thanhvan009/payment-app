import { Link } from 'react-router-dom';
import { StyledInfoDetail } from './styled';
function InfoDetail() {
  return (
    <StyledInfoDetail>
      <div className="image-wrap">
        <img src={window.location.origin  + '/images/product1.png'} className="product" alt="Product" />
      </div>
      <div className="info">
        <h1 className="title">Printed Chiffon Dress copy 2</h1>
        <p className="price">61.19$</p>
        <div className="rating">
          <img src={window.location.origin  + '/images/star.svg'} className="star" alt="star" />
          <img src={window.location.origin  + '/images/star.svg'} className="star" alt="star" />
          <img src={window.location.origin  + '/images/star.svg'} className="star" alt="star" />
          <img src={window.location.origin  + '/images/star.svg'} className="star" alt="star" />
          <img src={window.location.origin  + '/images/star.svg'} className="star" alt="star" />
        </div>
        <Link
          to={{
            pathname: "/checkout",
            state: {
              price: "61.19$",
              title: "Printed Chiffon Dress copy 2",
              imgUrl: `${window.location.origin}/images/product1.png`,
            },
          }}
        >
          <button className="pay-btn">Pay</button>
        </Link>
      </div>
    </StyledInfoDetail>
  );
}

export default InfoDetail;
