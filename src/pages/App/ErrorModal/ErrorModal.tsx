import React from 'react';

import { Dialog, Typography } from '@material-ui/core';
import { Arabica } from 'assets/images';
import { useTypedSelector } from 'hooks';
import { Button, Image } from 'components';
import { Content } from './styles';

export default function ErrorModal() {
  const { errorMsg, isOpen, okHandler } = useTypedSelector(
    (state) => state.ui.errorModal,
  );

  return (
    <Dialog
      open={isOpen}
      onClose={okHandler}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <Content>
        <Image src={Arabica} />
        <Typography>{errorMsg}</Typography>
        <Button onClick={okHandler}>Entendi!</Button>
      </Content>
    </Dialog>
  );
}
