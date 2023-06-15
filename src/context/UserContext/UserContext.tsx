import { useState, createContext } from 'react';

import { IUserContext, UserProviderProps } from './UserContext.types';

export const UserContext = createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
	const [selectedUserId, setSelectedUserId] = useState<null | number>(null);

	return (
		<UserContext.Provider
			value={{
				selectedUserId,
				setSelectedUserId,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
