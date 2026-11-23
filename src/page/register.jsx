import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      })
    );
    navigate("/profile");
  };

  return (
    <div className="row justify-content-center py-4">
      <div className="col-md-6 col-lg-5">
        <div className="card border-0 shadow-sm p-4">
          <h2 className="fw-bold mb-2 text-center">Daftar Akun</h2>
          <p className="text-muted small text-center mb-4">
            Buat akun Griya MDP untuk mulai mencari hunian impian
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="registerName" className="form-label">
                Nama Lengkap
              </label>
              <input
                id="registerName"
                type="text"
                name="name"
                className="form-control"
                placeholder="Nama lengkap Anda"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="registerEmail" className="form-label">
                Email
              </label>
              <input
                id="registerEmail"
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
              <label htmlFor="registerPhone" className="form-label">
                No. WhatsApp / Telepon
              </label>
              <input
                id="registerPhone"
                type="tel"
                name="phone"
                className="form-control"
                placeholder="08xxxxxxxxxx"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="registerPassword" className="form-label">
                Password
              </label>
              <input
                id="registerPassword"
                type="password"
                name="password"
                className="form-control"
                placeholder="Minimal 6 karakter"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2">
              Register
            </button>
          </form>

          <p className="text-muted small text-center mt-3 mb-0">
            Sudah punya akun? <Link to="/login">Masuk di sini</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
