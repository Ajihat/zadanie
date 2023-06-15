import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './context/UserContext/UserContext.tsx';
import App from './App.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<QueryClientProvider client={queryClient}>
		<UserProvider>
			<Router>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Router>
		</UserProvider>
	</QueryClientProvider>
);
