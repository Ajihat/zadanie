import { useState, useEffect } from 'react';

export const useGenerateCrumbs = (location: string) => {
	const [crumbs, setCrumbs] = useState<{ id: string; text: string; to: string }[]>([]);

	useEffect(() => {
		let currentLink = '';
		const crumbs = location
			.split('/')
			.filter((crumb) => crumb !== '')
			.map((crumb) => {
				currentLink += `/${crumb}`;
				return {
					id: crumb,
					text: crumb,
					to: currentLink,
				};
			});
		setCrumbs([{ id: 'home', text: 'home', to: '/' }, ...crumbs]);
	}, [location]);

	return crumbs;
};
