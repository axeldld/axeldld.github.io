import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero kicker', () => {
  render(<App />);
  const kickerElement = screen.getByText(/portfolio 2024/i);
  expect(kickerElement).toBeInTheDocument();
});
