import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import BottomNav from "../components/layout/BottomNav";
import Header from "../components/layout/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
};

export default Router;
