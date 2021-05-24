import styled from 'styled-components';

export const StyledInfoDetail = styled.div`
  display: flex;
  background-color: #fff;
  h1 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 10px;
    color: rgb(36, 36, 36);
  }

  .price {
    margin-top: 0;
    margin-bottom: 5px;
    color: #333;
  }

  .image-wrap {
    width: 257px;
    height: 300px;
    cursor: pointer;
    overflow: hidden;
    img {
      height: auto;
      width: 100%;
      transform: scale(1, 1);
      transition: all 0.3s ease;
    }
    &:hover {
      img {
        transform: scale(1.1,1.1) translateZ(0);
      }
    }
  }

  .info {
    padding: 20px;
  }

  .rating {
    margin-left: -1px;
  }

  button {
    color: #fff;
    background-color: #db3737;
    border: none;
    min-width: 100px;
    padding: 5px;
    font-size: 13px;
    margin-top: 40px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #c33434;
    }
  }
`;