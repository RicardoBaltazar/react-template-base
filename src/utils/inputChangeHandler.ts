import { ChangeEvent, SetStateAction } from 'react';

export interface InputChangeHandlerConfig {
  trim?: boolean;
  trimLeft?: boolean;
  validation?: Function;
  transform?: Function;
}

export function inputChangeHandler(
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setter: SetStateAction<any>,
  config?: InputChangeHandlerConfig,
) {
  e.persist();
  let value = e.target.value;

  if (config?.validation && !config.validation(value)) return;
  if (config?.trim) value = value.trim();
  if (config?.trimLeft) value = value.trimLeft();
  if (config?.transform) value = config.transform(value);

  setter((f: object) => ({ ...f, [e.target.name]: value }));
}
