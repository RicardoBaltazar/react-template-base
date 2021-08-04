import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export function useRedirect() {
  const history = useHistory();
  const redirect = useCallback((to: string) => history.push(to), [history]);
  return redirect;
}
