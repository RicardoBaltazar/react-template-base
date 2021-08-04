import { StateEnum } from 'shared/enums/state.enum';
import { Action } from 'store/types';
import { PostsState, PostsTypes } from './types';

const initialState: PostsState = {
  state: StateEnum.IDLE,
  data: [],
  error: '',
  cancelToken: null,
};

export function postsReducer(state = initialState, action: Action): PostsState {
  switch (action.type) {
    case PostsTypes.GET_POSTS:
      return {
        ...state,
        state: StateEnum.LOADING,
        cancelToken: action.payload.cancelToken,
      };
    case PostsTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        state: StateEnum.IDLE,
        data: action.payload.data,
      };
    case PostsTypes.GET_POSTS_FAILED:
      return {
        ...state,
        state: StateEnum.ERROR,
        error: action.payload.error,
      };
    case PostsTypes.GET_POSTS_ERROR_HANDLED:
      return {
        ...state,
        state: StateEnum.IDLE,
        error: '',
      };
    case PostsTypes.GET_POSTS_CANCELED:
      state?.cancelToken?.cancel('');
      return {
        ...state,
        state: StateEnum.CANCELED,
      };
    default:
      return state;
  }
}
