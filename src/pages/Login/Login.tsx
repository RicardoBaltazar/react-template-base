import React, { FormEvent } from 'react';
import { useForm, useTypedSelector, useErrorModal } from 'hooks';
import { isLoading } from 'utils';
import { useDispatch } from 'react-redux';
import { AuthActions } from 'store/auth';

import { Container, MainCard } from './styles';
import { TextField } from '@material-ui/core';
import { Button, Image } from 'components';

import { Cherry } from 'assets/images';

export default function Login() {
  const [form, onChange] = useForm({
    email: '',
    pwd: '',
  });
  const dispatch = useDispatch();
  const { state: loginState, error: loginError } = useTypedSelector(
    (state) => state.auth.login,
  );
  useErrorModal(loginError, () => dispatch(AuthActions.handleLoginError()));

  function canContinue() {
    return form.email.length > 3 && form.pwd.length > 3;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (canContinue()) {
      dispatch(AuthActions.login(form.email, form.pwd));
    }
  }

  return (
    <Container onSubmit={onSubmit}>
      <MainCard>
        <Image src={Cherry} alt='' />
        <TextField
          variant='outlined'
          value={form.email}
          name='email'
          onChange={onChange}
          label='E-mail'
          margin='normal'
          fullWidth
        />
        <TextField
          variant='outlined'
          value={form.pwd}
          name='pwd'
          onChange={onChange}
          label='Senha'
          margin='normal'
          type='password'
          fullWidth
        />
        <Button
          loading={isLoading(loginState)}
          fullWidth
          disabled={!canContinue()}
          type='submit'
        >
          Entrar
        </Button>
      </MainCard>
    </Container>
  );
}
