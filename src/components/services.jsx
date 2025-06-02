import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center py-5 bg-light">
      <div className="container">
        <div className="section-title mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">Discover how we make your life easier!</p>
        </div>
        <div className="row justify-content-center">
          {props.data
            ? props.data.map((service, i) => (
                <div
                  key={`${service.name}-${i}`}
                  className="col-md-6 col-sm-6 mb-4 d-flex align-items-stretch"
                >
                  <div
                    className="service-card p-4 bg-white shadow-sm rounded text-center w-100"
                    style={{
                      transition: "transform 0.3s, box-shadow 0.3s",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    <i className={`${service.icon} mb-3`}></i>
                    <div className="service-desc">
                      <h4 className="fw-semibold" style={{color: "white"}}>{service.name}</h4>
                      <p className="text-muted">{service.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
