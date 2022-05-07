import React from "react";
import Cards from "../common/Cards/Cards";
import BusinessTypes from "../common/Cards/BusinessTypes";
import { cardsDetails, BusinessTypesDetails } from "../../data/CardDetails";
import Poster from "../common/Poster/Poster";
import london from "../../Assets/london.jpg";
import europe from "../../Assets/europe.jpg";

const Commerce = () => {
  return (
    <div className="pages">
      <div className="container m-3">
        <div className="card-container bg-dark row g-3 pb-3 justify-content-center">
          <Poster src={london} src2={europe} />
        </div>
        <div className="card-container bg-dark row g-3 pb-3 justify-content-center">
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

        <div className="card-container bg-dark row g-3 pb-3 justify-content-center">
          <h2 className="text-warning p-2 ">
            Checkout the Type of Business You Fall Under
          </h2>
          <div className="BusinessTypesDetailsWrapper">
            {BusinessTypesDetails.map((eachCard, index) => {
              console.log(eachCard.src);
              return (
                <BusinessTypes
                  key={index}
                  src={eachCard.src}
                  title={eachCard.title}
                  desc={eachCard.desc}
                  secondaryTitle={eachCard.secondaryTitle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commerce;
