import React from "react";

const Commerce = (props) => {
  const { src, title, desc, buttonText } = props;

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <img src={src} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href=" " className="btn btn-primary">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Commerce;
