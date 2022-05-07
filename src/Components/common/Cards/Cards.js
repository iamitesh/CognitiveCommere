import React from "react";
import "./Cards.css";
const Cards = (props) => {
  const { src, title, desc, buttonText } = props;

  return (
    <div className="card-wrapper col-12 col-md-6 col-lg-4">
      <div className="card">
        <img src={src} className="card-img-top" alt={title} />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{desc}</p>
          <a
            href=" "
            className="btn bg-warning text-white font-italic text-uppercase"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
