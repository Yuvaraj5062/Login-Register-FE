import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../components/auth/AuthRoutes";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Logout from "../pages/logout/Logout";
import Signup from "../pages/signup/Signup";

const RootRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route  element={<AuthRoutes/>}>
                 <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default RootRoutes;
