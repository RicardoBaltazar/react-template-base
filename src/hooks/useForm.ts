import { useState, useCallback, ChangeEvent } from 'react';
import {
  inputChangeHandler,
  InputChangeHandlerConfig,
} from 'utils/inputChangeHandler';

export function useForm<T>(
  initialValues: T,
): [
  T,
  React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
  any,
  React.Dispatch<React.SetStateAction<T>>,
] {
  const [values, setForm] = useState<T>(initialValues);

  const setter = useCallback((newValues: Partial<T>) => {
    setForm((f) => ({ ...f, ...newValues }));
  }, []);

  const onChangeHandler: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      config?: InputChangeHandlerConfig,
    ) => {
      e.persist();
      inputChangeHandler(e, setForm, config);
    },
    [],
  );

  return [values, onChangeHandler, setter, setForm];
}
