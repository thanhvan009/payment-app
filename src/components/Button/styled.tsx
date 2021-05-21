import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 0;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  background-color: #db3737;
  color: #fff;
  height: 30px;
  min-width: 100px;
  transition: all 0.2s ease;
  text-align: center;

  &.primary {
    background-color: green;
  }
`;