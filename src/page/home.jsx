
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">
                Perumahan Impian Semua Insan
              </h1>
              <p className="lead mb-4">
                Temukan rumah idaman Anda dengan lokasi strategis, fasilitas
                lengkap, dan harga terjangkau. Griya MDP hadir untuk
                mewujudkan hunian impian keluarga Indonesia.
              </p>
              <div className="d-flex gap-3">
                <a href="#properties" className="btn btn-light btn-lg">
                  <i className="bi bi-search me-2"></i>
                  Cari Properti
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

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-12">
              <h2 className="fw-bold mb-3">
                Mengapa Memilih Griya MDP?
              </h2>
              <p className="text-muted">
                Kami memberikan yang terbaik untuk hunian impian Anda
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="card-body">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <i className="bi bi-geo-alt-fill text-primary fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold">Lokasi Strategis</h5>
                  <p className="card-text text-muted">
                    Dekat dengan pusat kota, sekolah, rumah sakit, dan
                    fasilitas umum lainnya
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="card-body">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <i className="bi bi-shield-check text-success fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold">Legalitas Lengkap</h5>
                  <p className="card-text text-muted">
                    Semua properti memiliki sertifikat lengkap dan terjamin
                    keamanannya
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="card-body">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <i className="bi bi-cash-coin text-warning fs-2"></i>
                  </div>
                  <h5 className="card-title fw-bold">Harga Terjangkau</h5>
                  <p className="card-text text-muted">
                    Berbagai pilihan dengan skema pembayaran yang fleksibel
                    dan kompetitif
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="properties-section py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-12 text-center">
              <h2 className="fw-bold mb-3">
                Pilihan Hunian Terbaik
              </h2>
              <p className="text-muted mb-4">
                Jelajahi berbagai pilihan properti berkualitas dengan
                fasilitas modern
              </p>

              {/* Filter Buttons */}
              <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
                <button className="btn btn-outline-primary active">
                  <i className="bi bi-grid-3x3-gap me-2"></i>
                  Semua
                </button>
                <button className="btn btn-outline-primary">
                  <i className="bi bi-house me-2"></i>
                  Rumah
                </button>
                <button className="btn btn-outline-primary">
                  <i className="bi bi-building me-2"></i>
                  Apartemen
                </button>
                <button className="btn btn-outline-primary">
                  <i className="bi bi-tree me-2"></i>
                  Villa
                </button>
              </div>
            </div>
          </div>

          {/* Housing Cards Grid */}
          <div className="row g-4 mb-4">
            {housingList.map((housing) => (
              <div className="col-md-6 col-lg-4" key={housing.id}>
                <LokasiPerumahan data={housing} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn-primary btn-lg">
                <i className="bi bi-arrow-down-circle me-2"></i>
                Lihat Lebih Banyak
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0 text-center text-lg-start">
              <h3 className="fw-bold mb-2">
                Siap Menemukan Rumah Impian Anda?
              </h3>
              <p className="mb-0">
                Hubungi kami sekarang dan dapatkan penawaran terbaik
                untuk properti pilihan Anda
              </p>
            </div>

            <div className="col-lg-4 text-center text-lg-end">
              <Link to="/contact" className="btn btn-light btn-lg">
                <i className="bi bi-telephone-fill me-2"></i>
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
