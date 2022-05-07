import React from "react";
import { Link } from "react-router-dom";
import Cards from "../common/Cards/Cards";
import europe from "../../Assets/europe.jpg";
import london from "../../Assets/london.jpg";
import newyork from "../../Assets/newyork.jpg";

const Commerce = () => {
  const cardsDetails = [
    {
      src: europe,
      title: "A Street in Europe",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Integer interdum odio in felis mattis feugiat/ In rhoncus
    libero magna, ultricies condimentum tortor tempor sit amet.`,
      buttonText: "Go somewhere",
    },
    {
      src: london,
      title: "London",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Integer interdum odio in felis mattis feugiat/ In rhoncus
    libero magna, ultricies condimentum tortor tempor sit amet.`,
      buttonText: "Go somewhere",
    },
    {
      src: newyork,
      title: "New York",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Integer interdum odio in felis mattis feugiat/ In rhoncus
    libero magna, ultricies condimentum tortor tempor sit amet.`,
      buttonText: "Go somewhere",
    },
  ];

  return (
    <div className="pages">
      <div className="container">
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
      </div>
    </div>
  );
};

export default Commerce;
