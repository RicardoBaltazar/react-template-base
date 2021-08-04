import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { UiActions } from 'store/ui';
import { useTypedSelector } from './useTypedSelector';

/**
 *
 * @param msg - Mensgem de erro a ser exibida
 * @param handler - Função a ser executada após lidar com o erro
 */
export function useErrorModal(msg: string | null, handler: () => void) {
  const dispatch = useDispatch();
  const isOpen = useTypedSelector((state) => state.ui.errorModal.isOpen);
  const memoizedMsg = useMemo(() => msg, [msg]);

  useEffect(() => {
    if (memoizedMsg) {
      dispatch(
        UiActions.showErrorModal({ errorMsg: memoizedMsg, okHandler: handler }),
      );
    } else if (isOpen) {
      dispatch(UiActions.closeErrorModal());
    }
  }, [memoizedMsg, handler, dispatch, isOpen]);
}
