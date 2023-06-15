export interface IUserContext {
	selectedUserId: number | null;
	setSelectedUserId: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface UserProviderProps {
	children: React.ReactNode;
}
