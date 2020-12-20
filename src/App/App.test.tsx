import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('it renders the App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mars Explorer App/i);
  expect(linkElement).toBeInTheDocument();
});
