import { compose, Dispatch } from 'redux';
import { UiTypes, UiState } from 'store/ui';
import { AuthState, AuthTypes } from './auth';
import { PostsState, PostsTypes } from './posts';

export type ActionTypes = UiTypes | AuthTypes | PostsTypes | 'dummy';

export interface Action {
  type: ActionTypes;
  payload?: any;
}

export type AsyncAction = (dispatch: Dispatch) => void;

export interface AppState {
  ui: UiState;
  auth: AuthState;
  posts: PostsState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
