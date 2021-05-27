import React, { Component } from "react";
import { ReactDOM } from "react";
import { StyledFooterHomePage } from "./StyledFooter";
export class FooterHomePage extends Component
{
    render()
    {
        return  <StyledFooterHomePage>
          <div className="container_footer">
            <div className="content_footer">
            <img
            className="logo"
            src="https://i.ibb.co/mNns8MQ/logo.png"
            alt="logo.png"
          ></img>
             <p>
             Earlier in this tutorial we made a web page with rows and columns, and it was responsive, but it did not look good on a small screen.
             </p>
            </div>
            <div className="content_footer">
           <ul>
               <h3>Information</h3>
               <li>
                   CSS technique introduced in CSS3
               </li>
               <li>
                  rule to include a block of CSS
               </li>
               <li>
                   certain condition is true.
               </li>
               <li>
               differently on each side of the breakpoint.
               </li>
               <li>
               small screen.
               </li>
               <li>
               Add a Breakpoint

               </li>
           </ul>
            </div>
            <div className="content_footer">
            <ul>
               <h3>Address</h3>
               <li>
                 W3Schools is optimized for learning and training
               </li>
               <li>
                 Number 5 ht31 street
               </li>
               <li>
                   Certain condition is true.
               </li>
           </ul>
            </div>
           </div>
        </StyledFooterHomePage>    

    }
}