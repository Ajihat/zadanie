import { render } from '@testing-library/react';
import { Header } from 'src/components';

describe('Header', () => {
  test('should render header with correct text', () => {
    const { getByText } = render(<Header />);

    const headerText = getByText('POSTS FINDER');

    expect(headerText).toBeInTheDocument();
  });
});
