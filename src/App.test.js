import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});
