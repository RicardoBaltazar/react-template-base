import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppState } from 'store/types';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
