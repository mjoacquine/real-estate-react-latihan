import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("griyaMdpUser");
    return saved
      ? JSON.parse(saved)
      : {
          name: "Keluarga Griya MDP",
          email: "tamu@griyamdp.id",
          phone: "-",
          preferredCity: "Kota Palembang",
        };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(user);

  const recommendedHomes = [
    {
      id: 1,
      name: "Griya Asri Residence",
      location: "Jakarta Selatan",
      price: 850000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      status: "Available",
    },
    {
      id: 2,
      name: "Taman Indah Village",
      location: "Tangerang",
      price: 650000000,
      bedrooms: 2,
      bathrooms: 1,
      area: 90,
      status: "Available",
    },
  ];

  const formatRupiah = (amount) =>
    `Rp ${Number(amount).toLocaleString("id-ID")}`;

  const handleDraftChange = (e) => {
    const { name, value } = e.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser(draft);
    localStorage.setItem("griyaMdpUser", JSON.stringify(draft));
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("griyaMdpUser");
    setUser(null);
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="py-5 text-center">
        <div className="card border-0 shadow-sm p-5 mx-auto" style={{ maxWidth: "480px" }}>
          <h3 className="fw-bold mb-2">Sesi Telah Berakhir</h3>
          <p className="text-muted small mb-4">
            Silakan masuk kembali untuk mengakses profil dan hunian pilihan Anda di Griya MDP.
          </p>
          <Link to="/login" className="btn btn-primary">
            Kembali ke Halaman Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="card border-0 shadow-sm p-4 mb-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div className="d-flex align-items-center">
            <div
              className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold fs-4 me-3"
              style={{ width: "64px", height: "64px" }}
            >
              {user.name?.charAt(0)?.toUpperCase() || "G"}
            </div>
            <div>
              <h3 className="fw-bold mb-1">{user.name}</h3>
              <p className="text-muted small mb-0">
                <i className="bi bi-geo-alt me-1 text-primary"></i>
                Minat Hunian: <strong>{user.preferredCity || "Kota Palembang"}</strong>
              </p>
            </div>
          </div>

          <div className="d-flex gap-2 flex-wrap">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => {
                setDraft(user);
                setIsEditing((prev) => !prev);
              }}
            >
              <i className="bi bi-pencil-square me-1"></i>
              {isEditing ? "Batal" : "Ubah Profil"}
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-1"></i>Keluar
            </button>
          </div>
        </div>

        {isEditing ? (
          <form onSubmit={handleSaveProfile} className="border-top mt-4 pt-4">
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label small fw-semibold">Nama</label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm"
                  value={draft.name}
                  onChange={handleDraftChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-semibold">No. WhatsApp</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control form-control-sm"
                  value={draft.phone}
                  onChange={handleDraftChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label small fw-semibold">Lokasi Minat</label>
                <input
                  type="text"
                  name="preferredCity"
                  className="form-control form-control-sm"
                  value={draft.preferredCity}
                  onChange={handleDraftChange}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-sm px-3">
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="row g-3 border-top mt-4 pt-3 small">
            <div className="col-md-6">
              <span className="text-muted d-block">Email Terdaftar</span>
              <span className="fw-semibold">{user.email}</span>
            </div>
            <div className="col-md-6">
              <span className="text-muted d-block">Nomor WhatsApp</span>
              <span className="fw-semibold">{user.phone || "-"}</span>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold mb-0">Hunian Pilihan Anda</h4>
        <Link to="/" className="btn btn-sm btn-outline-primary">
          Lihat Semua Hunian
        </Link>
      </div>

      <div className="row g-4">
        {recommendedHomes.map((homeItem) => (
          <div className="col-md-6" key={homeItem.id}>
            <div className="card border-0 shadow-sm h-100 p-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="badge bg-success">{homeItem.status}</span>
                <span className="fw-bold text-primary">
                  {formatRupiah(homeItem.price)}
                </span>
              </div>
              <h5 className="fw-bold mb-1">{homeItem.name}</h5>
              <p className="text-muted small mb-3">
                <i className="bi bi-geo-alt me-1"></i>
                {homeItem.location}
              </p>
              <div className="d-flex justify-content-between text-muted small border-top pt-2 mt-auto">
                <span>{homeItem.bedrooms} KT</span>
                <span>{homeItem.bathrooms} KM</span>
                <span>{homeItem.area} m²</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
