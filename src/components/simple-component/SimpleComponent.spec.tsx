// src/components/SimpleComponent.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleComponent from './SimpleComponent';

test('renders Hello, World!', () => {
  render(<SimpleComponent />);
  const linkElement = screen.getByText(/hello, world!/i);
  expect(linkElement).toBeInTheDocument();
});
