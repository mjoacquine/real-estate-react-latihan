import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "griyaMdpUser",
      JSON.stringify({
        name: "Pengguna Griya MDP",
        email: formData.email,
      })
    );
    navigate("/profile");
  };

  return (
    <div className="row justify-content-center py-4">
      <div className="col-md-6 col-lg-5">
        <div className="card border-0 shadow-sm p-4">
          <h2 className="fw-bold mb-2 text-center">Masuk Akun</h2>
          <p className="text-muted small text-center mb-4">
            Silakan masuk untuk mengakses profil dan properti tersimpan
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">
                Email
              </label>
              <input
                id="loginEmail"
                type="email"
                name="email"
                className="form-control"
                placeholder="nama@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">
                Password
              </label>
              <input
                id="loginPassword"
                type="password"
                name="password"
                className="form-control"
                placeholder="Masukkan password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2">
              Login
            </button>
          </form>

          <p className="text-muted small text-center mt-3 mb-0">
            Belum punya akun? <Link to="/register">Daftar di sini</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
