import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import BottomNav from "../components/layout/BottomNav";
import Header from "../components/layout/Header";
import Character from "../pages/character/Character";
import MyChallenge from "../pages/my-challenge/MyChallenge";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-challenge" element={<MyChallenge />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
};

export default Router;
