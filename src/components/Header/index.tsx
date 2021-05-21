import React from 'react';
import { StyledHeader } from './styled';

interface IHeader {
  text: string;
}

const Header = (props: IHeader) => {
  const { text } = props;
  return (
      <StyledHeader>
        {text}
      </StyledHeader>
  );
}
export default Header;