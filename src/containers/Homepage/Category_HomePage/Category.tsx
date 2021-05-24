import React, { Component } from "react";
import {StyledCategory} from './StyledCategory'


export default class CategoryBanner extends Component
{

    render()
    {
        const images= [
            '/images/category_1.jfif',
            '/images/category_2.jpg',
            '/images/category_3.jpg'
        ]
        return  <StyledCategory>
        <div className="container_category">
           <div className="category">  
             <img className="image_category" src={window.location.origin+ images[0]}  /> 
             <button className="btn_category">Click here</button>  
           </div>

           <div className="category">   
           <img className="image_category" src={window.location.origin+ images[1]}  />    
           <button className="btn_category">Click here</button>  
    
           </div>
           <div className="category">   
           <img className="image_category" src={window.location.origin+ images[2]}  />   
           <button className="btn_category">Click here</button>      
           </div>
        </div>
        </StyledCategory>
        ;
    }
}