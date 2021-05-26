import React, { Component } from "react";
import { ReactDOM } from "react";
import { StyledProduc } from "./StyledProduct";

export class Product extends Component
{
        
    
    render(){
        const imageProduct = [
            '/images/product_1.jpg',
            '/images/product_2.jpg',
            '/images/product_3.jpg',
            '/images/product_4.jpg'
    
         ]

        return <StyledProduc>
        <div className="container_product">
            <div className="products">
                <img className="product_image" src={window.location.origin+imageProduct[0]}/>
                <p className="product_name"> winter clothes </p>
                <div className="product_content"> 
                   <p className="price">8000 VNĐ</p>
                   <button className="btn_AddCard">Add to card</button>
                </div>
            </div>
            <div className="products">
                <img className="product_image" src={window.location.origin+imageProduct[1]}/>
                <p className="product_name"> winter clothes</p>
                <div className="product_content"> 
                   <p className="price">8000 VNĐ</p>
                   <button className="btn_AddCard">Add to card</button>
                </div>
            </div>
            <div className="products">
                <img className="product_image" src={window.location.origin+imageProduct[2]}/>
                <p className="product_name"> winter clothes</p>
                <div className="product_content"> 
                   <p className="price">8000 VNĐ</p>
                   <button className="btn_AddCard">Add to card</button>
                </div>
            </div>
            <div className="products">
                <img className="product_image" src={window.location.origin+imageProduct[3]}/>
                <p className="product_name"> winter clothes</p>
                <div className="product_content"> 
                   <p className="price">8000 VNĐ</p>
                   <button className="btn_AddCard">Add to card</button>
                </div>
            </div>
  
        </div>
        </StyledProduc>
        
    }
}