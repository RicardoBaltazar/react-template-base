import React from 'react';

import { Container, Content } from './styles';
import AppBar from './AppBar';
import NavDrawer from './NavDrawer/NavDrawer';

interface LayoutProps {
  isAuth: boolean;
  children: any;
}

export default function Layout(props: LayoutProps) {
  const { isAuth, children } = props;

  return (
    <Container>
      {isAuth && <AppBar />}
      {isAuth && <NavDrawer />}
      <Content isAuth={isAuth}>{children}</Content>
    </Container>
  );
}
