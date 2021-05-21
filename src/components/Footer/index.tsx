import React from 'react';
import { StyledFooter } from './styled';

interface IFooter {
  text: string;
}

const Footer = (props: IFooter) => {
  const { text } = props;
  return (
      <StyledFooter>
        {text}
      </StyledFooter>
  );
}
export default Footer;