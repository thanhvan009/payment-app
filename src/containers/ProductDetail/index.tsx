import { StyledProductDetail } from './styled';
import Button from './../../components/Button';
function ProductDetail() {
  return (
    <StyledProductDetail className="product-detail">
        <Button text="Checkout" />
    </StyledProductDetail>
  );
}

export default ProductDetail;
