import { StateEnum } from 'shared/enums/state.enum';

export function hasError(state: StateEnum) {
  return state === StateEnum.ERROR;
}
