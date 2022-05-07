import React from "react";
import "./Cards.css";
const BusinessTypes = (props) => {
  const { src, title, desc, secondaryTitle } = props;

  return (
    <div className="card-wrapper col-12">
      <div className="card">
        <div className="card-body type-card-body ">
          <div className="section-one">
            <h5 className="card-title text-white bg-dark">{title}</h5>
            <p className="card-text">{desc}</p>
          </div>
          <div className="section-two">
            <h4 className="card-sec-title text-dark ">{secondaryTitle}</h4>
            <img src={src} className="card-img-top" alt={secondaryTitle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTypes;
