import styled from "styled-components";

export const StyledButton = styled.div`
  div {
    display: flex;
    background-color: black;
    height: 50px;
    align-items: center;
    justify-content: center;
  }

  p {
    color: white;
    padding: 0 20px;
  }

  p:hover {
    cursor: pointer;
    color: yellow;
  }

  .btn {
    color: white;
    background-color: red;
    height: 100%;
    width: 200px;
    text-align: center;
  }
`;
