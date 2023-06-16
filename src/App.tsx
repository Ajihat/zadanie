import { Routes, Route } from 'react-router-dom';

import { Home, Posts, Information, PostDetails } from './pages';

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
					<Route index element={<Information />} />
					<Route path={appRoutes.userPosts} element={<Posts />} />
					<Route path={appRoutes.postDetails} element={<PostDetails />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
