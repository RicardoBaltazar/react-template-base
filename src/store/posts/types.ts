import { CancelTokenSource } from 'axios';
import { StateEnum } from 'shared/enums/state.enum';

export enum PostsTypes {
  GET_POSTS = 'posts/GET_POSTS',
  GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS',
  GET_POSTS_FAILED = 'posts/GET_POSTS_FAILED',
  GET_POSTS_ERROR_HANDLED = 'posts/GET_POSTS_ERROR_HANDLED',
  GET_POSTS_CANCELED = 'posts/GET_POSTS_CANCELED',
}

export interface PostsState {
  state: StateEnum;
  data: FetchPostsResponse[];
  error: string;
  cancelToken: CancelTokenSource | null;
}

export interface FetchPostsResponse {
  useId: number;
  id: number;
  title: string;
  body: string;
}

export interface GetPostsSuccessArgs {
  data: FetchPostsResponse;
}
