import { axiosInstance } from 'api';
import { Endpoints } from 'api/endpoints';
import Axios, { CancelTokenSource } from 'axios';
import { Action, AsyncAction } from 'store/types';
import { GetPostsSuccessArgs, PostsTypes } from './types';

export class PostsActions {
  static handlePostsError(): Action {
    return { type: PostsTypes.GET_POSTS_ERROR_HANDLED };
  }

  static getPostsFailed(error: string): Action {
    return { type: PostsTypes.GET_POSTS_FAILED, payload: { error } };
  }

  static getPostsStarted(cancelToken: CancelTokenSource): Action {
    return { type: PostsTypes.GET_POSTS, payload: { cancelToken } };
  }

  static getPostsSuccess({ data }: GetPostsSuccessArgs): Action {
    return {
      type: PostsTypes.GET_POSTS_SUCCESS,
      payload: { data },
    };
  }

  static getPosts(delayed = false): AsyncAction {
    return async (dispatch) => {
      try {
        const cancelToken = Axios.CancelToken.source();
        dispatch(PostsActions.getPostsStarted(cancelToken));
        const { data } = await axiosInstance.get(
          delayed
            ? Endpoints.posts.delayedFetchPosts()
            : Endpoints.posts.fetchPosts(),
          {
            cancelToken: cancelToken.token,
          },
        );
        dispatch(PostsActions.getPostsSuccess({ data }));
      } catch (woof) {
        dispatch(PostsActions.getPostsFailed('Serviço indisponível!'));
      }
    };
  }

  static cancelGetPosts(): Action {
    return { type: PostsTypes.GET_POSTS_CANCELED };
  }
}
