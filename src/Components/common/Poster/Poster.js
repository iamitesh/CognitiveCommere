import React from "react";
import "./Poster.css";
const Poster = (props) => {
  const { src, title, src2, buttonText } = props;

  return (
    //col-12 col-md-6 col-lg-4
    <div className="poster-wrapper ">
      <div className="poster ">
        <h1 className="poster-title text-warning m-2 p-3 border border-white">
          Welcome to the World of Possiblities !
        </h1>
        <div className="poster-body pb-3 pt-3">
          <div className="poster-child child-one ">
            <div className="poster-item item-one ">
              <img src={src} className="poster-img-top" alt={title} />
            </div>
            <div className="poster-item item-two ">
              <img src={src} className="poster-img-top" alt={title} />
            </div>
          </div>
          <div className="poster-child child-two ">
            {/* <div className="poster-item item-two "> */}
            <img src={src2} className="poster-img-top" alt={title} />
            {/* </div> */}
          </div>
          <div className="poster-child child-three ">
            <div className="poster-item item-one ">
              <img src={src} className="poster-img-top" alt={title} />
            </div>
            <div className="poster-item item-two ">
              <img src={src} className="poster-img-top" alt={title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
