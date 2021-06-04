import React from 'react';
import Header from './../Header';
import Footer from './../Footer';
import { StyledContainer, StyledSignIn } from './styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const pathname = window.location.pathname
  if (
    /^\/sign-up(?=\/|$)/i.test(pathname) || 
    /^\/sign-in(?=\/|$)/i.test(pathname) ||
    /^\/login(?=\/|$)/i.test(pathname)
  ) {
    return (
      <StyledSignIn >
        <div className="main-content">{children}</div>
      </StyledSignIn>
    );
  }
  return (
    <StyledContainer >
      <Header  />
      <div className="main-content">{children}</div>
      <Footer />
    </StyledContainer>
  );
}
export default Layout;