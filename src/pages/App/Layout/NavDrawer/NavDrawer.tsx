import React from 'react';

import { List } from '@material-ui/core';
import { Container, Title } from './styles';
import { CancelScheduleSend, Home } from '@material-ui/icons';
import { useRedirect, useTypedSelector } from 'hooks';
import { useDispatch } from 'react-redux';
import { UiActions } from 'store/ui';
import { RoutesPaths } from 'Routes';
import NavOption from './NavOption';

export default function NavDrawer() {
  const { isOpen } = useTypedSelector((state) => state.ui.navDrawer);
  const dispatch = useDispatch();
  const redirect = useRedirect();

  function redirectClick(to: string) {
    dispatch(UiActions.closeNavDrawer());
    redirect(to);
  }

  return (
    <Container
      open={isOpen}
      onClose={() => dispatch(UiActions.closeNavDrawer())}
    >
      <Title>Project Reference</Title>
      <List>
        <NavOption
          icon={<Home />}
          redirect={redirectClick}
          route={RoutesPaths.dashboard}
          text='Home'
        />
        <NavOption
          icon={<CancelScheduleSend />}
          redirect={redirectClick}
          route={RoutesPaths.requestCancelation}
          text='Request Cancelation'
        />
      </List>
    </Container>
  );
}
