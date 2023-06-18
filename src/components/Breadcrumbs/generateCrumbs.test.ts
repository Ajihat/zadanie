import { generateCrumbs } from './generateCrumbs';

describe('generateCrumbs', () => {
  test('should generate crumbs for the given location', () => {
    const location = '/1/2';
    const expectedCrumbs = [
      { id: 'home', text: 'home', to: '/' },
      { id: 0, text: '1', to: '/1' },
      { id: 1, text: '2', to: '/1/2' },
    ];

    const crumbs = generateCrumbs(location);

    expect(crumbs).toEqual(expectedCrumbs);
  });

  test('should handle empty location', () => {
    const location = '';
    const expectedCrumbs = [{ id: 'home', text: 'home', to: '/' }];

    const crumbs = generateCrumbs(location);

    expect(crumbs).toEqual(expectedCrumbs);
  });

  test('should handle root location', () => {
    const location = '/';
    const expectedCrumbs = [{ id: 'home', text: 'home', to: '/' }];

    const crumbs = generateCrumbs(location);

    expect(crumbs).toEqual(expectedCrumbs);
  });
});
