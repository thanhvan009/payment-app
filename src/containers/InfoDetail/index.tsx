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
        <button className="pay-btn">Pay</button>
      </div>
    </StyledInfoDetail>
  );
}

export default InfoDetail;
