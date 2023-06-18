import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { Home, Posts, Information, PostDetails, NotFound } from './pages';

import { Layout } from 'src/components';
import { appRoutes } from 'src/appRoutes';

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path={appRoutes.home} element={<Home />}>
            <Route index element={<Information />} />
            <Route path={appRoutes.userPosts} element={<Posts />} />
            <Route path={appRoutes.postDetails} element={<PostDetails />} />
          </Route>
          <Route path={appRoutes.notFound} element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
