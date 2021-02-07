import { render, screen } from '@testing-library/react';
import List from '../../list';

test('renders learn react link', () => {
  render(<List />);
  const header = screen.getByText('Latest Popular Movies')
  expect(header).toBeInTheDocument()
});
