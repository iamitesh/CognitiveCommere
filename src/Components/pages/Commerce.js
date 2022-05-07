import React from "react";
import Cards from "../common/Cards/Cards";
import { cardsDetails } from "../../data/CardDetails";

const Commerce = () => {
  return (
    <div className="pages">
      <div className="container m-3">
        <div className="row g-3 justify-content-center">
          {cardsDetails.map((eachCard, index) => {
            console.log(eachCard.src);
            return (
              <Cards
                key={index}
                src={eachCard.src}
                title={eachCard.title}
                desc={eachCard.desc}
                buttonText={eachCard.buttonText}
              />
            );
          })}
        </div>
        <div className="m-3 p-3">Here I would be displaying card overlays</div>
      </div>
    </div>
  );
};

export default Commerce;
