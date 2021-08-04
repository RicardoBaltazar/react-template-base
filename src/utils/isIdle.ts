import { StateEnum } from 'shared/enums/state.enum';

export function isIdle(state: StateEnum) {
  return state === StateEnum.IDLE;
}
