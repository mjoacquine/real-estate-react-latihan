
import React from 'react'

function Features() {
  return (
    <div>
      <section className="features-section py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-12">
              <h2 className="fw-bold mb-3">Mengapa Memilih Griya MDP?</h2>
              <p className="text-muted">
                Kami memberikan yang terbaik untuk hunian impian Anda
              </p>
            </div>
          </div>
          <div className="row g-4">
            {/* Feature Card 1 */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="card-body">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <i className="bi bi-geo-alt-fill text-primary fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold">Lokasi Strategis</h5>
                  <p className="card-text text-muted">
                    Dekat dengan pusat kota, sekolah, rumah sakit, dan fasilitas
                    umum lainnya
                  </p>
                </div>
              </div>
            </div>
            {/* Feature Card 2 */}
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
            {/* Feature Card 3 */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="card-body">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <i className="bi bi-cash-coin text-warning fs-2"></i>
                  </div>
                  <h5 className="card-title fw-bold">Harga Terjangkau</h5>
                  <p className="card-text text-muted">
                    Berbagai pilihan dengan skema pembayaran yang fleksibel dan
                    kompetitif
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features