import { Routes, Route } from 'react-router-dom';

import { Home, Posts, Information } from './pages';

import { Header, Breadcrumbs } from './components';

import { appRoutes } from './appRoutes/appRoutes';

import './App.css';

function App() {
	return (
		<>
			<Header />
			<Breadcrumbs />
			<Routes>
				<Route path={appRoutes.home} element={<Home />}>
					<Route path={appRoutes.userPosts} element={<Posts />} />
					<Route index element={<Information />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
