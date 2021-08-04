import { useTypedSelector } from 'hooks';
import React from 'react';

import Routes from 'Routes';
import ErrorModal from './ErrorModal';
import { MainContainer } from './styles';
import Layout from './Layout';

export default function App() {
  const isAuth = useTypedSelector((state) => state.auth.session.isAuth);

  return (
    <MainContainer>
      <ErrorModal />
      <Layout isAuth={isAuth}>
        <Routes key={String(isAuth)} />
      </Layout>
    </MainContainer>
  );
}
