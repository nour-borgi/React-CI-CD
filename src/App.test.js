import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome RT5 - Nour El Houda Borgi/i);
  expect(linkElement).toBeInTheDocument();
});
