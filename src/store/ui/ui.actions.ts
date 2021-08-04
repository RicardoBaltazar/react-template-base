import { Action } from 'store/types';
import { ShowErrorModalArgs, UiTypes } from './types';

export class UiActions {
  static showErrorModal({ errorMsg, okHandler }: ShowErrorModalArgs): Action {
    return {
      type: UiTypes.SHOW_ERROR_MODAL,
      payload: {
        errorMsg,
        okHandler,
      },
    };
  }

  static closeErrorModal(): Action {
    return {
      type: UiTypes.CLOSE_ERROR_MODAL,
    };
  }

  static openNavDrawer(): Action {
    return {
      type: UiTypes.OPEN_DRAWER,
    };
  }

  static closeNavDrawer(): Action {
    return {
      type: UiTypes.CLOSE_DRAWER,
    };
  }

  static toggleNavDrawer(): Action {
    return {
      type: UiTypes.TOGGLE_DRAWER,
    };
  }
}
