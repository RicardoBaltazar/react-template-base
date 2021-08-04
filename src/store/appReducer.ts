import { combineReducers } from 'redux';
import { AppState } from 'store/types';

import { uiReducer as ui } from './ui';
import { authReducer as auth } from './auth';
import { postsReducer as posts } from './posts';

export default combineReducers<AppState>({
  ui,
  auth,
  posts,
});
