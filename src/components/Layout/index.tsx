import React from 'react';
import Header from './../Header';
import Footer from './../Footer';
import { StyledContainer } from './styled';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <StyledContainer >
      <Header  />
      <div className="main-content">{children}</div>
      <Footer />
    </StyledContainer>
  );
}
export default Layout;