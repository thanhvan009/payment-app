import { StyledInfoDetail } from "./styled";
import Paypal from "./../../components/Paypal";
import { OnApproveData } from "@paypal/paypal-js/types/components/buttons";
import { useHistory, useLocation } from "react-router-dom";
import Stripe from "./../../components/Stripe";
import Layout from "../../components/Layout";

type ProductInfo = {
  id: number;
  name: string;
  price: number;
  image: string;
};

function InfoDetail() {
  // const [product, setProduct] = useState({ name: "", id: 0, price: 0 });
  const history = useHistory();
  const location = useLocation();
  const { id, name, price, image } = location.state as ProductInfo;

  // const url = "http://localhost:5000/api/product";
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => setProduct(data))
  //     .catch((error) => console.log(error));
  // }, []);
  const onApprove = async (data: OnApproveData, actions: { order: any }) => {
    const order = await actions.order.capture();
    if (order) {
      history.push("/checkout/success");
    }
  };

  return (
    <Layout>
      <StyledInfoDetail>
        <div className="container">
          <div className="content">
            <div className="left-content">
              <div className="image-container">
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${window.location.origin}${image})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="right-content">
              <div className="title">
                <p>{name}</p>
              </div>
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
              <div className="price">
                Price: <span>${price}</span>
              </div>
              <div className="info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
                totam rerum fugit, architecto asperiores ipsam placeat possimus in
                voluptatem? Repudiandae officia magni at nisi? Ullam voluptate
                harum officia aliquam eligendi.
              </div>
              <div className="payment">
                <Stripe product={{ id, name, price }} />
                <Paypal onApprove={onApprove} />
              </div>
            </div>
          </div>
        </div>
      </StyledInfoDetail>
    </Layout>
  );
}

export default InfoDetail;
