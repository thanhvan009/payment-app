import React, { Component } from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { StyledProduct } from "./StyledProduct";

export class Product extends Component {
  render() {
    const products = [
      {
        id: 1,
        name: "Spring clothes",
        price: 200000,
        imgSrc: `${window.location.origin}/images/product_1.jpg`,
      },
      {
        id: 2,
        name: "Summer clothes",
        price: 600000,
        imgSrc: `${window.location.origin}/images/product_2.jpg`,
      },
      {
        id: 3,
        name: "Autumn clothes",
        price: 400000,
        imgSrc: `${window.location.origin}/images/product_3.jpg`,
      },
      {
        id: 4,
        name: "Winter clothes",
        price: 300000,
        imgSrc: `${window.location.origin}/images/product_4.jpg`,
      },
    ];

    return (
      <StyledProduct>
        <div className="container_product">
          {products.map((product) => {
            return (
              <div className="products" key={product.id}>
                <img className="product_image" src={product.imgSrc} />
                <p className="product_name">{product.name}</p>
                <div className="product_content">
                  <p>{product.price} VNĐ</p>
                  <Link
                    to={{
                      pathname: "info-detail",
                      state: {
                        name: product.name,
                        price: product.price,
                        imgSrc: product.imgSrc,
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
