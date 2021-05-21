import React from 'react';
import { StyledMainContent } from './styled';
import Title from './../Title';

interface IMainContent {
  text: string;
}

const MainContent = (props: IMainContent) => {
  const { text } = props;
  return (
      <StyledMainContent className="text-center">
        <Title text={text} />
      </StyledMainContent>
  );
}
export default MainContent;