import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("griyaMdpUser") || "null");
    const derivedName =
      existing && existing.email === formData.email
        ? existing.name
        : formData.email.split("@")[0] || "Keluarga Griya MDP";

    localStorage.setItem(
      "griyaMdpUser",
      JSON.stringify({
        name: derivedName,
        email: formData.email,
        phone: existing?.phone || "-",
        preferredCity: existing?.preferredCity || "Kota Palembang",
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
              <i className="bi bi-house-heart-fill me-1"></i> Griya MDP
            </span>
            <h2 className="fw-bold mb-1">Selamat Datang Kembali</h2>
            <p className="text-muted small mb-0">
              Masuk untuk melihat hunian favorit dan profil Anda
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label small fw-semibold">
                Alamat Email
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

            <div className="mb-4">
              <label
                htmlFor="loginPassword"
                className="form-label small fw-semibold"
              >
                Kata Sandi
              </label>
              <div className="input-group">
                <input
                  id="loginPassword"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  placeholder="Masukkan kata sandi"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label="Tampilkan atau sembunyikan kata sandi"
                >
                  <i
                    className={`bi ${
                      showPassword ? "bi-eye-slash" : "bi-eye"
                    }`}
                  ></i>
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
              <i className="bi bi-box-arrow-in-right me-2"></i>Masuk ke Akun
            </button>
          </form>

          <p className="text-muted small text-center mt-4 mb-0">
            Belum punya akun Griya MDP?{" "}
            <Link to="/register" className="fw-semibold text-decoration-none">
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
