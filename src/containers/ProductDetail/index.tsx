import { StyledProductDetail } from "./styled";
function ProductDetail() {
  return (
    <div>
      <StyledProductDetail>
        <div className="product-detail__container">
          <div className="product-detail__content">
            <div className="product-detail__left-content">
              <div className="product-detail__image"></div>
            </div>
            <div className="product-detail__right-content">
              <div className="product-detail__title">
                <p>
                  Máy PlayStation Sony PS4 Slim 1Tb Mode Cuh 2218B - Hàng Chính
                  Hãng- New Seal
                </p>
              </div>
              <div className="product-detail__price">
                Price: <span>$2.480</span>
              </div>
              <div className="product-detail__info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci totam rerum fugit, architecto asperiores ipsam placeat
                possimus in voluptatem? Repudiandae officia magni at nisi? Ullam
                voluptate harum officia aliquam eligendi.
              </div>
              <div className="product-detail__payment">
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </StyledProductDetail>
    </div>
  );
}

export default ProductDetail;
