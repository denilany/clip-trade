import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TaxEase Kenya', () => {
  render(<App />);
  const linkElement = screen.getByText(/TaxEase Kenya/i);
  expect(linkElement).toBeInTheDocument();
});