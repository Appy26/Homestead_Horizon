import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AccountDashboard from "../pages/AccountDashboard";
import Bookings from "../pages/Bookings";
import Hosted from "../pages/Hosted";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<AccountDashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/hosted" element={<Hosted />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
