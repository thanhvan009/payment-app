import { Component } from "react";
import {StyledCategory} from './StyledCategory';
import { Link } from "react-router-dom";

export default class CategoryBanner extends Component {
  render() {
    const productList = [
      {
        id: 1,
        name: 'Coat',
        price: '10',
        image: '/images/category_1_new.jpg'
      },
      {
        id: 2,
        name: 'Dress',
        price: '20',
        image: '/images/category_2_new.jpg'
      },
      {
        id: 3,
        name: 'Blouse',
        price: '30',
        image: '/images/category_3_new.jpg'
      },
    ];

    return (
      <StyledCategory>
        <div className="container_category">
          {
            productList.map(product=>(
              <div className="category">  
                <img
                  className="image_category"
                  src={window.location.origin+ product.image}
                  alt=""
                />
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
                  <button className="btn_category">Click here</button>  
                </Link>
              </div>
            ))
          }
        </div>
      </StyledCategory>
    );
  }
}