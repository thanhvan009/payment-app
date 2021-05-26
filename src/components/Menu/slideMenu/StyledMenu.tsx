import styled from "styled-components";

export const StyledMenu = styled.div`
  .btn_open{
    display: none;
  }
  @media (max-width: 767px) {
    .container_slideMenu{
      background-color:#ff23239e;
      width:100%;
      min-height:10em;

      .btn_open {
        display: block;
        min-height:12em;
        min-width: 10em;
        background-color: #ff9595;
        border-radius: 20px;
        margin-left: 1%;
        border:none
      }
    }
  }
 

`