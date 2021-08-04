import { StateEnum } from 'shared/enums/state.enum';

export function isCanceled(state: StateEnum) {
  return state === StateEnum.CANCELED;
}
