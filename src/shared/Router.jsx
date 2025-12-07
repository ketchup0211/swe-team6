import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Character from '../pages/character/Character';
import MyChallenge from '../pages/my-challenge/MyChallenge';
import Home from '../pages/home/Home';
import CreateChallenge from '../pages/create-challenge/CreateChallenge';
import Profile from '../pages/profile/Profile';
import Shop from '../pages/shop/Shop';
import Dashboard from '../pages/dashboard/Dashboard';
import Layout from '../components/layout/Layout';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import { ROUTES } from '../constants/routes';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path={ROUTES.LOGIN} element={<Login />} />
        
        {/* Protected Routes */}
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path={ROUTES.HOME} element={<Character />} />
                  <Route path={ROUTES.CHALLENGES} element={<MyChallenge />} />
                  <Route path="/challenges/:id" element={<Home />} />
                  <Route path={ROUTES.CREATE_CHALLENGE} element={<CreateChallenge />} />
                  <Route path={ROUTES.PROFILE} element={<Profile />} />
                  <Route path={ROUTES.SHOP} element={<Shop />} />
                  <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
