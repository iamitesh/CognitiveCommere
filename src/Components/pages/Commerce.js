import React from "react";
import Cards from "../common/Cards/Cards";
import BusinessTypes from "../common/Cards/BusinessTypes";
import { cardsDetails, BusinessTypesDetails } from "../../data/CardDetails";

const Commerce = () => {
  return (
    <div className="pages">
      <div className="container m-3">
        <div className="card-container bg-dark row g-3 justify-content-center">
          <h2 className="text-warning p-2 ">
            Kick Start Your Business in Multiple Cities{" "}
          </h2>
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
        <div className="card-container bg-dark row g-3 justify-content-center">
          <h2 className="text-warning p-2 ">
            Checkout the Type of Business You Fall Under
          </h2>
          {BusinessTypesDetails.map((eachCard, index) => {
            console.log(eachCard.src);
            return (
              <BusinessTypes
                key={index}
                src={eachCard.src}
                title={eachCard.title}
                desc={eachCard.desc}
                secondaryTitle={eachCard.buttonText}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Commerce;
