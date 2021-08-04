import { StateEnum } from 'shared/enums/state.enum';

export function isComplete(state: StateEnum) {
  return state === StateEnum.COMPLETE;
}
