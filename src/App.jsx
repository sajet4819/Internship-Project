import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="bg-dark text-light" style={{ minHeight: "100vh" }}>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />  {/* ✅ Redirect invalid paths */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
