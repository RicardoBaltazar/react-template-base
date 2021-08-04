import { createStore, compose, applyMiddleware, Action } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AuthTypes } from 'store/auth';
import { appReducer } from 'store';
import { AppState } from 'store/types';

const rootReducer = (state: AppState | undefined, action: Action) =>
  action.type === AuthTypes.LOGOUT
    ? appReducer(undefined, action)
    : appReducer(state, action);

const persistedReducer = persistReducer(
  {
    key: `arquitetura-referencia-v${process.env?.REACT_APP_STORAGE_VERSION}`,
    version: Number(process.env?.REACT_APP_STORAGE_VERSION) ?? 1,
    storage,
  },
  rootReducer,
);

function enhanceStore() {
  const middlewares = [thunk];
  const composeEnhancers =
    window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose;
  return process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(...middlewares))
    : compose(applyMiddleware(...middlewares));
}

export const store = createStore(persistedReducer, enhanceStore());
export const persistor = persistStore(store);
