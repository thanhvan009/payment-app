import React from "react";
import { StyledButton } from "./styled";

const Button = () => {
  return (
    <StyledButton>
      <div className="menu">
        <p>HOME</p>
        <p>SHOP</p>
        <p>FEATURES</p>
        <p>MEGA GROUP</p>
        <p>ABOUT</p>
        <p>BLOG</p>
        <p>CONTACT</p>
        <div className="btn">
          <p>Shopping Cart (0)</p>
        </div>
      </div>
    </StyledButton>
  );
};

export default Button;
