import { useEffect, EffectCallback } from 'react';

export function useMount(cb: EffectCallback) {
  // eslint-disable-next-line
  useEffect(cb, []);
}
