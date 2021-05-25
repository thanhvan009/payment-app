import { Component } from "react";
import { Link } from "react-router-dom";
import { StyledProduct } from "./StyledProduct";

type ProductInfo = {
  id: any;
  price: number;
  name: string;
};
export class Product extends Component {
  state: { productList: ProductInfo[] } = {
    productList: [],
  };
  url = "http://localhost:5000/api/product/list";
  componentDidMount() {
    fetch(this.url)
      .then((res) => {
        return res.json();
      })
      .then((data) => this.setState({ productList: data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <StyledProduct>
        <div className="container_product">
          {this.state.productList.map((product: ProductInfo) => {
            return (
              <div className="products" key={product.id}>
                <img
                  className="product_image"
                  src={`${window.location.origin}/images/product1.png`}
                />
                <p className="product_name">{product.name}</p>
                <div className="product_content">
                  <p>${product.price}</p>
                  <Link
                    to={{
                      pathname: "info-detail",
                      state: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                      },
                    }}
                  >
                    <button className="btn_AddCard">More info</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </StyledProduct>
    );
  }
}
