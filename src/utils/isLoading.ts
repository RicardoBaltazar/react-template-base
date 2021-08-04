import { StateEnum } from 'shared/enums/state.enum';

export function isLoading(state: StateEnum) {
  return state === StateEnum.LOADING;
}
