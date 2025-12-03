import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import BottomNav from "../components/layout/BottomNav";
import Character from "../pages/character/Character";
import MyChallenge from "../pages/my-challenge/MyChallenge";
import CreateChallenge from "../pages/create-challenge/CreateChallenge";
import Layout from "../components/layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-challenge" element={<MyChallenge />} />
          <Route path="/create-challenge" element={<CreateChallenge />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
