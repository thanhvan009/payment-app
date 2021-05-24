import styled from "styled-components";

export const StyledHeader = styled.div`
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
  }

  .icon-square {
    border: 1px solid #a6a6a6;
    height: 39px;
    padding: 0 15px;
  }

  .search-bar {
    width: 80%;
    height: 35px;
  }

  .row-navigation {
    background-color: black;
  }
`;
