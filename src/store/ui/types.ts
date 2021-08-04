export interface UiState {
  errorModal: {
    isOpen: boolean;
    errorMsg: string | any;
    okHandler: () => void;
  };
  navDrawer: {
    isOpen: boolean;
  };
}

export enum UiTypes {
  SHOW_ERROR_MODAL = 'ui/SHOW_ERROR_MODAL',
  CLOSE_ERROR_MODAL = 'ui/CLOSE_ERROR_MODAL',
  OPEN_DRAWER = 'ui/OPEN_DRAWER',
  CLOSE_DRAWER = 'ui/CLOSE_DRAWER',
  TOGGLE_DRAWER = 'ui/TOGGLE_DRAWER',
}

export interface ShowErrorModalArgs {
  errorMsg: string | any;
  okHandler: () => void;
}
