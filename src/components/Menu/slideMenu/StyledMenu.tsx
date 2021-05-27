import styled from "styled-components";

export const StyledMenu = styled.div`
  .bm-menu-wrap {
    width: 39em !important;
  }

  .btn_open {
    display: none;
    width:0%;
  }

  @media (max-width: 767px) {
    .btn_open {
      display: block;
      height: 12em;
      width: 100%;
      background-image: linear-gradient(to right,white ,snow);
      border: none;
      position: relative;
      .col{
        height: 100%;
        position: absolute;
        .logo{
          height: 100%;
        }
      }
      
    }

    .container_slideMenu{
      background-image: linear-gradient(to left,#fff6f6 ,#ffffff);
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      position: absolute;
      margin-left: 0px;
      padding-top: 50%;
      padding-left: 2%;
      .select_menu{
        height: 3%;
        font-size: 58px;
        font-weight: 600;
        text-align: left;
        text-tranform : capitalize;
        padding: 0.8em;
      }
    }
  }
`