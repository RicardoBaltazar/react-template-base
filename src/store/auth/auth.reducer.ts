import { StateEnum } from 'shared/enums/state.enum';
import { Action } from 'store/types';
import { AuthState, AuthTypes } from './types';

const initialState: AuthState = {
  session: {
    isAuth: false,
    isExpired: false,
    isUnauthorized: false,
  },
  tokens: {
    access: null,
    refresh: null,
  },
  login: {
    state: StateEnum.IDLE,
    error: '',
  },
};

export function authReducer(state = initialState, action: Action): AuthState {
  switch (action.type) {
    case AuthTypes.LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          state: StateEnum.LOADING,
        },
      };
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          state: StateEnum.IDLE,
        },
        tokens: {
          access: action.payload.access,
          refresh: action.payload.refresh,
        },
        session: {
          ...state.session,
          isAuth: true,
        },
      };
    case AuthTypes.LOGIN_FAILED:
      return {
        ...state,
        login: {
          ...state.login,
          state: StateEnum.ERROR,
          error: action.payload.error,
        },
      };
    case AuthTypes.LOGIN_ERROR_HANDLED:
      return {
        ...state,
        login: {
          ...state.login,
          state: StateEnum.IDLE,
          error: '',
        },
      };
    case AuthTypes.LOGOUT:
    case AuthTypes.RESET:
      return initialState;
    default:
      return state;
  }
}
