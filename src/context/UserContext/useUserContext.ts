import { useContext } from 'react';
import { UserContext } from './UserContext';

export const useUserContext = () => {
	const ctx = useContext(UserContext);
	if (!ctx) throw new Error('useUserContext can only be used inside ContextProvider');
	return ctx;
};
