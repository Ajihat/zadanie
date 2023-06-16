import { useState, useEffect } from 'react';
import { Crumb } from './Breadcrumbs.types';

export const useGenerateCrumbs = (location: string) => {
	const [crumbs, setCrumbs] = useState<Crumb[]>([]);

	useEffect(() => {
		let currentLink = '';
		const homeCrumb = {
			id: 'home',
			text: 'home',
			to: '/',
		};
		const generatedCrumbs = location
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
		setCrumbs([homeCrumb, ...generatedCrumbs]);
	}, [location]);

	return crumbs;
};
