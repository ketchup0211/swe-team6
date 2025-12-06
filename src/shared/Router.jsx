import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import Character from '../pages/character/Character';
import MyChallenge from '../pages/my-challenge/MyChallenge';
import CreateChallenge from '../pages/create-challenge/CreateChallenge';
import Layout from '../components/layout/Layout';
import { ROUTES } from '../constants/routes';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CHARACTER} element={<Character />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.MY_CHALLENGE} element={<MyChallenge />} />
          <Route path={ROUTES.CREATE_CHALLENGE} element={<CreateChallenge />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
