import styled from "styled-components";

export const StyledInfoDetail = styled.div`
  .container {
    margin: 20px;
    height: 600px;
    background-color: #f5f5f5;
  }

  .content {
    height: 100%;
    width: 60%;
    margin: auto;
    background-color: #ffffff;
    display: flex;
  }

  .left-content {
    flex-basis: 40%;
    height: 100%;
  }

  .image-container {
    height: 60%;
    overflow: hidden;
    position: relative;
    margin: 40px 20px 0;
}
  .image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 1s;
    cursor: pointer;
    :hover {
      transform: scale(1.1, 1.1) translateZ(0);
    }
  }

  .right-content {
    flex-basis: 60%;
    height: 100%;
    margin: 20px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }

  .price {
    margin-top: 30px;
    padding: 15px;
    width: auto;
    background-color: #fafafa;
    height: auto;
    font-size: 18px;

    span {
      color: red;
      font-weight: bold;
    }
  }

  .info {
    margin-top: 30px;
    padding: 0 20px;
  }

  .payment {
    margin-top: 30px;
    padding: 0 20px;
    button {
      font-size: 14px;
      height: 40px;
      width: 100%;
      font-weight: bold;
      text-transform: uppercase;
      padding: 10px;
      background-color: #f73434;
      border: none;
      cursor: pointer;
      outline: none;
      color: white;
      border-radius: 5px;
      margin: 10px 0;
      :hover {
        background-color: #ff5e5e;
      }
      :active {
        background-color: #c40000;
      }
    }
  }
`;
