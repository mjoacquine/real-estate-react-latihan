import React from "react";

function Properties({ housingList = [] }) {
  const formatRupiah = (amount) =>
    `Rp ${Number(amount).toLocaleString("id-ID")}`;

  return (
    <div>
      <section id="properties" className="properties-section py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-12 text-center">
              <h2 className="fw-bold mb-3">Pilihan Hunian Terbaik</h2>
              <p className="text-muted mb-4">
                Jelajahi berbagai pilihan properti berkualitas dengan fasilitas
                modern
              </p>
              {/* Filter Buttons */}
              <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
                <button type="button" className="btn btn-outline-primary active">
                  <i className="bi bi-grid-3x3-gap me-2"></i>Semua
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <i className="bi bi-house me-2"></i>Rumah
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <i className="bi bi-building me-2"></i>Apartemen
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <i className="bi bi-tree me-2"></i>Villa
                </button>
              </div>
            </div>
          </div>

          {/* Housing Cards Grid */}
          <div className="row g-4 mb-4">
            {housingList.map((housing) => (
              <div className="col-md-6 col-lg-4" key={housing.id}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={housing.image}
                    alt={housing.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-success">{housing.status}</span>
                      <span className="text-warning small fw-semibold">
                        <i className="bi bi-star-fill me-1"></i>
                        {housing.rating}
                      </span>
                    </div>
                    <h5 className="card-title fw-bold mb-1">{housing.name}</h5>
                    <p className="text-muted small mb-2">
                      <i className="bi bi-geo-alt me-1"></i>
                      {housing.location}
                    </p>
                    <p className="fw-bold text-primary fs-5 mb-3">
                      {formatRupiah(housing.price)}
                    </p>
                    <div className="d-flex justify-content-between text-muted small border-top pt-3 mt-auto">
                      <span>{housing.bedrooms} KT</span>
                      <span>{housing.bathrooms} KM</span>
                      <span>{housing.area} m²</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="row">
            <div className="col-12 text-center">
              <button type="button" className="btn btn-primary btn-lg">
                <i className="bi bi-arrow-down-circle me-2"></i>Lihat Lebih
                Banyak
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Properties;