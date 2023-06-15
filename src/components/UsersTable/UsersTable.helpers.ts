import { User } from './useGetUsers.types';

export const generateUserTableRows = (users: User[]) => {
	const rows = users.map((user) => {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
		};
	});
	return rows;
};
