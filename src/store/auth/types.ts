import { StateEnum } from 'shared/enums/state.enum';

export enum AuthTypes {
  LOGOUT = 'auth/LOGOUT',
  RESET = 'auth/RESET',
  LOGIN = 'auth/LOGIN',
  LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS',
  LOGIN_FAILED = 'auth/LOGIN_FAILED',
  LOGIN_ERROR_HANDLED = 'auth/LOGIN_ERROR_HANDLED',
}

export interface AuthState {
  session: {
    isAuth: boolean;
    isUnauthorized: boolean;
    isExpired: boolean;
  };
  tokens: {
    access: string | null;
    refresh: string | null;
  };
  login: {
    state: StateEnum;
    error: string;
  };
}
