import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders recipe finder header message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Oddbox Recipe Finder!/i);
  expect(linkElement).toBeInTheDocument();
});
