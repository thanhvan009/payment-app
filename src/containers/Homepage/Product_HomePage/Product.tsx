import { Component } from "react";
import { Link } from "react-router-dom";
import { StyledProduct } from "./StyledProduct";
import { API_URL } from "./../../../constants/index";
import {productListMock} from "./mockData";

type ProductInfo = {
  id: any;
  price: number;
  name: string;
  image: string
};
export class Product extends Component {
  state: { productList: ProductInfo[] } = {
    productList: [],
  };
  url = API_URL + "product/list";

  requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  componentWillMount() {
    // Hard code for now
    this.setState({ productList: productListMock });
  }

  componentDidMount() {
    fetch(this.url, this.requestOptions)
      .then((res) => {
        console.log(res);
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
                  src={`${window.location.origin}${product.image}`}
                  alt="product"
                />
                <p className="product_name">{product.name}</p>
                <div className="product_content">
                  <p className="price">${product.price}</p>
                  <Link
                    to={{
                      pathname: "info-detail",
                      state: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
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
