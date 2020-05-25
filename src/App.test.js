import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders stopwatch', () => {
  const { getByText } = render(<App />);
  const element = getByText(/stopwatch/i);
  expect(element).toBeInTheDocument();
});
