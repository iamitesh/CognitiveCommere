import React from "react";
import "./Cards.css";
const BusinessTypes = (props) => {
  const { src, title, desc, secondaryTitle } = props;

  return (
    <div className="card-wrapper col-12 col-md-6 col-lg-4">
      <div className="card">
        <div className="card-body">
          <div className="section-one">
            <h3 className="card-title text-danger">{title}</h3>
            <p className="card-text">{desc}</p>
          </div>
          <div className="section-two">
            <h5 className="card-title">{secondaryTitle}</h5>
            <img src={src} className="card-img-top" alt={secondaryTitle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTypes;
