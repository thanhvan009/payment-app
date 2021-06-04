import styled from "styled-components";

export const StyledHeader = styled.div`
  @media  (max-width: 767px) 
  {
    display:none;
  }

  background-color: white;
  .row {
    display: flex;
  }

  .row-logo {
    line-height: 6em;
  }

  .col {
    width: 33.33%;
    text-align: center;
    padding: 8px;
    font-size: 14px;
  }

  .col-left {
    border-bottom: 1px solid #a6a6a6;
    border-right: 1px solid #a6a6a6;
  }

  .col-mid {
    border-bottom: 1px solid #a6a6a6;
  }

  .col-right {
    border-left: 1px solid #a6a6a6;
    border-bottom: 1px solid #a6a6a6;
  }

  .col-search {
    align-items: center;
    display: flex;
  }

  .col-social-media {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .icon {
    padding: 0 5px;
  }

  .icon-round {
    border-radius: 60px;
    box-shadow: 0px 0px 2px #888;
    padding: 0.5em 0.5em;
    margin: 0 3px;
    width: 40px;
    height: 40px;
  }

  .icon-square {
    border: 1px solid #a6a6a6;
    padding: 0 15px;
    padding: 0 9px;
    width: 40px;
    height: 40px;
  }

  .search-bar {
    width: 80%;
    height: 40px;
  }

  .row-navigation {
    background-color: black;
  }

  .login-wrap {
    display: flex;
    border-bottom: 1px solid #a6a6a6;
    button {
      margin: 5px;
    }
  }

  .profile {
    border-bottom: 1px solid #a6a6a6;
    display: flex;
  }

  .user {
    display: block;
    width: 45px;
    height: 45px;
    text-align: center;
    border: 1px solid #ddd;
    line-height: 40px;
    border-radius: 45px;
    color: red;
  }

  .logout {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
