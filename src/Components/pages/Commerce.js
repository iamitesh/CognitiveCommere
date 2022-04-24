import React from "react";
import { Link } from "react-router-dom";

const Commerce = () => {
  return (
    <div className="pages">
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="./europe.jpg"
                className="card-img-top"
                alt="A Street in Europe"
              />
              <div className="card-body">
                <h5 className="card-title">A Street in Europe</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer interdum odio in felis mattis feugiat. In rhoncus
                  libero magna, ultricies condimentum tortor tempor sit amet.
                </p>
                <a href=" " className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src="./london.jpg" className="card-img-top" alt="London" />
              <div className="card-body">
                <h5 className="card-title">London</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer interdum odio in felis mattis feugiat. In rhoncus
                  libero magna, ultricies condimentum tortor tempor sit amet.
                </p>
                <a href=" " className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="./new-york.jpg"
                className="card-img-top"
                alt="New York"
              />
              <div className="card-body">
                <h5 className="card-title">New York</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer interdum odio in felis mattis feugiat. In rhoncus
                  libero magna, ultricies condimentum tortor tempor sit amet.
                </p>
                <a href=" " className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commerce;
