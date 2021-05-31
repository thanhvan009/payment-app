import { Component } from "react";
import {StyledCategory} from './StyledCategory'


export default class CategoryBanner extends Component
{

    render()
    {
        const images= [
            '/images/category_1_new.jpg',
            '/images/category_2_new.jpg',
            '/images/category_3_new.jpg'
        ]
        return  <StyledCategory>
        <div className="container_category">
           <div className="category">  
             <img className="image_category" src={window.location.origin+ images[0]} alt=""  /> 
             <button className="btn_category">Click here</button>  
           </div>

           <div className="category">   
           <img className="image_category" src={window.location.origin+ images[1]} alt="" />    
           <button className="btn_category">Click here</button>  
    
           </div>
           <div className="category">   
           <img className="image_category" src={window.location.origin+ images[2]} alt="" />   
           <button className="btn_category">Click here</button>      
           </div>
        </div>
        </StyledCategory>
        ;
    }
}