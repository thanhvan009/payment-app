import styled from "styled-components";


export const StyledProduct = styled.div`
  .container_product
  {
      display:flex;
      flex-direction:row;
      min-height: 24em;
      width: auto;
      padding-top:1em;
      flex-wrap: wrap;
      .products
      {
        background-color:#f3eeee;
         width: 22% ;
          height : 30%;;
          margin:1em;
          position:relative ;
      }
      .product_image
      {
        width: 90%;
        height: 20em;
        margin: 1em;
        margin-bottom : 0px;
      }
      .product_name
      {
        margin-left : 1em;
        margin-right : 1em;
        font-size: 18px;
        line-height: 1;
        text-transform: capitalize;
        border-bottom: 2px solid #b1154a;
        padding-bottom: 1em;

      }
      .product_content
      {
        padding-bottom: 0.5em;
        display:flex ;
        justify-content : center;
        font-family: cursive;
      }
      .btn_AddCard{
        margin-left:10%;
        background-color: #ea1212;
        color: white;
        border: aliceblue;
        height: 3em;
        width: 9em;
        cursor : pointer;
      }
      .btn_AddCard:hover
      {
        background-color: #ff5a5a;
      }
 }
 @media  (max-width: 767px) {
  .container_product {
    flex-direction: column;
    .products{
      display: flex;
      align-items: center;
      width : 100%;
      .product_image
      {
        max-width: 22%;
  
      }
      .product_name
      {
        position:absolute;
        left :18em;
        top:2em;
      }
      .btn_AddCard
      {
        position:absolute;
        left :70%;
        top:19em;
      }
      .price
      {
        position:absolute;
        top: 31%;
        left: 27%;
      }
     
     
    }
  
  }
}
`;