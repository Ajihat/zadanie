export const generateCrumbs = (location: string) => {
  const pathParts = location.split('/').filter(crumb => crumb !== '');

  const crumbs = pathParts.map((crumb, index) => {
    const to = `/${pathParts.slice(0, index + 1).join('/')}`;

    return {
      id: index,
      text: crumb,
      to,
    };
  });

  return [{ id: 'home', text: 'home', to: '/' }, ...crumbs];
};
