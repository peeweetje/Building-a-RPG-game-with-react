import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the App', () => {
  const { getByText } = render(<App />);
  expect(getByText).toBeTruthy();
});
