
import React from 'react'

function Hero() {
  return (
    <div>
      <section className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">
                Perumahan Impian Semua Insan
              </h1>
              <p className="lead mb-4">
                Temukan rumah idaman Anda dengan lokasi strategis, fasilitas
                lengkap, dan harga terjangkau. Griya MDP hadir untuk mewujudkan
                hunian impian keluarga Indonesia.
              </p>
              <div className="d-flex gap-3">
                <a href="#properties" className="btn btn-light btn-lg">
                  <i className="bi bi-search me-2"></i>Cari Properti
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                alt="Perumahan Modern"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero