import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <>
      {/* Komponen NavBar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold" to="/">
            Griya MDP
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Router */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;