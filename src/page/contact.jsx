import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Tanya Harga & Promo",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({
      name: "",
      email: "",
      interest: "Tanya Harga & Promo",
      message: "",
    });
  };

  return (
    <div className="py-4">
      <div className="text-center mb-5">
        <span className="badge bg-primary bg-opacity-10 text-primary mb-2 px-3 py-2">
          Konsultasi Hunian Griya MDP
        </span>
        <h2 className="fw-bold mb-2">Hubungi Tim Pemasaran Kami</h2>
        <p className="text-muted mb-0">
          Dapatkan informasi unit, skema pembayaran, dan jadwal kunjungan lokasi hunian impian Anda
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h5 className="fw-bold mb-4">Layanan Griya MDP</h5>

            <div className="d-flex align-items-start mb-3">
              <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <div className="fw-semibold small">Lokasi Proyek & Info</div>
                <div className="text-muted small">Kota Palembang & sekitarnya</div>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <div className="bg-success bg-opacity-10 text-success rounded-circle p-2 me-3">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <div className="fw-semibold small">Telepon / WhatsApp</div>
                <div className="text-muted small">+62 812-3456-7890</div>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="bg-warning bg-opacity-10 text-warning rounded-circle p-2 me-3">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div>
                <div className="fw-semibold small">Email Resmi</div>
                <div className="text-muted small">halo@griyamdp.id</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm p-4">
            {sent && (
              <div className="alert alert-success" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                Terima kasih! Permintaan informasi Anda sudah kami terima.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label
                    htmlFor="contactName"
                    className="form-label small fw-semibold"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label
                    htmlFor="contactEmail"
                    className="form-label small fw-semibold"
                  >
                    Email
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label
                    htmlFor="contactInterest"
                    className="form-label small fw-semibold"
                  >
                    Kebutuhan Informasi
                  </label>
                  <select
                    id="contactInterest"
                    name="interest"
                    className="form-select"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="Tanya Harga & Promo">Tanya Harga & Promo</option>
                    <option value="Jadwal Survei Unit">Jadwal Survei Unit</option>
                    <option value="Skema Pembayaran">Skema Pembayaran</option>
                  </select>
                </div>

                <div className="col-12">
                  <label
                    htmlFor="contactMessage"
                    className="form-label small fw-semibold"
                  >
                    Pesan / Catatan
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows="4"
                    className="form-control"
                    placeholder="Tuliskan tipe hunian atau pertanyaan Anda..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary px-4">
                    <i className="bi bi-send-fill me-2"></i>Kirim Pesan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
