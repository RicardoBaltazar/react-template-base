import { Action } from 'store/types';
import { UiState, UiTypes } from './types';

const initialState: UiState = {
  errorModal: {
    isOpen: false,
    errorMsg: '',
    okHandler: () => {},
  },
  navDrawer: {
    isOpen: false,
  },
};

export function uiReducer(state = initialState, action: Action): UiState {
  switch (action.type) {
    case UiTypes.SHOW_ERROR_MODAL:
      return {
        ...state,
        errorModal: {
          isOpen: true,
          errorMsg: action.payload.errorMsg,
          okHandler: action.payload.okHandler,
        },
      };
    case UiTypes.CLOSE_ERROR_MODAL:
      return {
        ...state,
        errorModal: {
          ...state.errorModal,
          isOpen: false,
        },
      };
    case UiTypes.OPEN_DRAWER:
      return {
        ...state,
        navDrawer: {
          ...state.navDrawer,
          isOpen: true,
        },
      };
    case UiTypes.CLOSE_DRAWER:
      return {
        ...state,
        navDrawer: {
          ...state.navDrawer,
          isOpen: false,
        },
      };
    case UiTypes.TOGGLE_DRAWER:
      return {
        ...state,
        navDrawer: {
          ...state.navDrawer,
          isOpen: !state.navDrawer.isOpen,
        },
      };
    default:
      return state;
  }
}
