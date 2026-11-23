import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("griyaMdpUser");
    return saved
      ? JSON.parse(saved)
      : {
          name: "Tamu Griya MDP",
          email: "tamu@griyamdp.id",
          phone: "-",
        };
  });

  const handleLogout = () => {
    localStorage.removeItem("griyaMdpUser");
    setUser(null);
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="py-5 text-center">
        <h2 className="fw-bold mb-2">Anda Belum Login</h2>
        <p className="text-muted mb-4">
          Silakan masuk terlebih dahulu untuk melihat data profil Anda.
        </p>
        <Link to="/login" className="btn btn-primary">
          Ke Halaman Login
        </Link>
      </div>
    );
  }

  return (
    <div className="row justify-content-center py-4">
      <div className="col-md-8 col-lg-6">
        <div className="card border-0 shadow-sm p-4">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold fs-4 me-3" style={{ width: "60px", height: "60px" }}>
              {user.name?.charAt(0)?.toUpperCase() || "G"}
            </div>
            <div>
              <h3 className="fw-bold mb-1">{user.name}</h3>
              <p className="text-muted mb-0">Member Griya MDP</p>
            </div>
          </div>

          <div className="border-top pt-3 mb-4">
            <p className="mb-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="mb-0">
              <strong>No. Telepon:</strong> {user.phone || "-"}
            </p>
          </div>

          <div className="d-flex gap-2">
            <Link to="/" className="btn btn-outline-primary">
              Kembali ke Beranda
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-outline-danger"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
