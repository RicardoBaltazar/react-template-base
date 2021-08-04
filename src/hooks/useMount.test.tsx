import React from 'react';

import { useMount } from './useMount';
import { render } from '@testing-library/react';

const mockFn = jest.fn();

const DummyComponent = () => {
  useMount(mockFn);

  return <h1>Dummy!</h1>;
};

describe('Hooks -> useMount', () => {
  it('should execute only once', () => {
    const { rerender } = render(<DummyComponent />);
    rerender(<DummyComponent />);
    expect(mockFn).toBeCalledTimes(1);
  });
});
