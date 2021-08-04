import { Action, AsyncAction } from 'store/types';
import { AuthTypes } from './types';

export class AuthActions {
  static logout(): Action {
    return { type: AuthTypes.LOGOUT };
  }

  static loginStarted(): Action {
    return { type: AuthTypes.LOGIN };
  }

  static loginFailed(error: string): Action {
    return {
      type: AuthTypes.LOGIN_FAILED,
      payload: { error },
    };
  }

  static loginSuccess(access: string, refresh: string): Action {
    return {
      type: AuthTypes.LOGIN_SUCCESS,
      payload: {
        access,
        refresh,
      },
    };
  }

  static handleLoginError(): Action {
    return {
      type: AuthTypes.LOGIN_ERROR_HANDLED,
    };
  }

  static login(email: string, pwd: string): AsyncAction {
    return (dispatch) => {
      dispatch(AuthActions.loginStarted());
      setTimeout(() => {
        if (email === 'admin@gmail.com' && pwd === '123456') {
          dispatch(
            AuthActions.loginSuccess('fake.access.token', 'fake.refresh.token'),
          );
        } else {
          dispatch(AuthActions.loginFailed('Usuário e/ou senha inválidos.'));
        }
      }, 1500);
    };
  }
}
