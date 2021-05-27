import React, { Component } from "react";
import { ReactDOM } from "react";
import { StyledMenu } from "./StyledMenu";

export class SlideMenu extends Component
{


    render(){ 
      
        return <StyledMenu>
        <div className="container_slideMenu">
           <button className="btn_open" >&#9776; </button>

         </div>
        </StyledMenu>

    }
}