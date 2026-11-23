import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredCity: "Kota Palembang",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      setErrorMsg("Kata sandi minimal terdiri dari 6 karakter.");
      return;
    }
    setErrorMsg("");
    localStorage.setItem(
      "griyaMdpUser",
      JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferredCity: formData.preferredCity,
      })
    );
    navigate("/profile");
  };

  return (
    <div className="row justify-content-center py-4">
      <div className="col-md-6 col-lg-5">
        <div className="card border-0 shadow-sm p-4">
          <div className="text-center mb-4">
            <span className="badge bg-primary bg-opacity-10 text-primary mb-2 px-3 py-2">
              <i className="bi bi-house-add-fill me-1"></i> Griya MDP
            </span>
            <h2 className="fw-bold mb-1">Buat Akun Baru</h2>
            <p className="text-muted small mb-0">
              Mulai temukan hunian strategis & terjangkau untuk keluarga Anda
            </p>
          </div>

          {errorMsg && (
            <div className="alert alert-danger py-2 small" role="alert">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="registerName"
                className="form-label small fw-semibold"
              >
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
              <label
                htmlFor="registerEmail"
                className="form-label small fw-semibold"
              >
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

            <div className="row g-2 mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="registerPhone"
                  className="form-label small fw-semibold"
                >
                  No. WhatsApp
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

              <div className="col-sm-6">
                <label
                  htmlFor="registerCity"
                  className="form-label small fw-semibold"
                >
                  Lokasi Hunian Minat
                </label>
                <input
                  id="registerCity"
                  type="text"
                  name="preferredCity"
                  className="form-control"
                  value={formData.preferredCity}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="registerPassword"
                className="form-label small fw-semibold"
              >
                Kata Sandi
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

            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
            >
              <i className="bi bi-check-circle me-2"></i>Daftar Sekarang
            </button>
          </form>

          <p className="text-muted small text-center mt-4 mb-0">
            Sudah punya akun?{" "}
            <Link to="/login" className="fw-semibold text-decoration-none">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
