import { IconButton } from '@material-ui/core';
import { Apps } from '@material-ui/icons';
import { Button } from 'components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AuthActions } from 'store/auth';
import { UiActions } from 'store/ui';

import { Container, ActionButtons, LeftSection } from './styles';

export default function AppBar() {
  const dispatch = useDispatch();

  function logout() {
    dispatch(AuthActions.logout());
  }

  return (
    <Container>
      <LeftSection>
        <IconButton onClick={() => dispatch(UiActions.toggleNavDrawer())}>
          <Apps />
        </IconButton>
      </LeftSection>
      <ActionButtons>
        <Button onClick={logout}>Sair</Button>
      </ActionButtons>
    </Container>
  );
}
