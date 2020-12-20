import React from 'react';
import { render, screen } from '@testing-library/react';
import CommandForm from "./index";

test('renders command form', () => {
  render(<CommandForm />);
  const linkElement = screen.getByText(/Mars Explorer App/i);
  expect(linkElement).toBeInTheDocument();
});
