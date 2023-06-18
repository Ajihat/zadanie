import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  test('should render Breadcrumbs component with correct crumbs', () => {
    const crumbs = [
      { id: 'home', text: 'home', to: '/' },
      { id: 0, text: '1', to: '/1' },
      { id: 1, text: '2', to: '/1/2' },
    ];

    const { getByText } = render(
      <MemoryRouter initialEntries={['/1/2']}>
        <Breadcrumbs />
      </MemoryRouter>,
    );

    crumbs.forEach(crumb => {
      const crumbElement = getByText(crumb.text);
      expect(crumbElement).toBeInTheDocument();
      expect(crumbElement).toHaveAttribute('href', crumb.to);
    });
  });
});
