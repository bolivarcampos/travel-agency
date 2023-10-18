import React from "react";
import "./main.css";

import { HiOutlineLocationMarker } from "react-icons/hi";

import img from "../../Assets/1.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Tailandia",
    location: "Asia",
    grade: "Viaje Ensueño",
    fee: "$850",
    description:
      "Lorem ipsum kansdlkaadasdasdskndnuih khnjksahsdhjk ywoeiuahhas ghsdhasio jsdoifskfl jiodjsaofjsljfsdjs oisjdopsjaiofps78rh oisjdaofjdsfsj",
  },

  // {
  //   id: 2,
  //   imgSrc: img2,
  //   destTitle: "Tailandia",
  //   location: "Asia",
  //   grade: "Viaje Ensueño",
  //   fee: "$850",
  //   description:
  //     "Lorem ipsum kansdlkaadasdasdskndnuih khnjksahsdhjk ywoeiuahhas ghsdhasio jsdoifskfl jiodjsaofjsljfsdjs oisjdopsjaiofps78rh oisjdaofjdsfsj",
  // },

  // {
  //   id: 3,
  //   imgSrc: img3,
  //   destTitle: "Tailandia",
  //   location: "Asia",
  //   grade: "Viaje Ensueño",
  //   fee: "$850",
  //   description:
  //     "Lorem ipsum kansdlkaadasdasdskndnuih khnjksahsdhjk ywoeiuahhas ghsdhasio jsdoifskfl jiodjsaofjsljfsdjs oisjdopsjaiofps78rh oisjdaofjdsfsj",
  // },

  // {
  //   id: 4,
  //   imgSrc: img4,
  //   destTitle: "Tailandia",
  //   location: "Asia",
  //   grade: "Viaje Ensueño",
  //   fee: "$850",
  //   description:
  //     "Lorem ipsum kansdlkaadasdasdskndnuih khnjksahsdhjk ywoeiuahhas ghsdhasio jsdoifskfl jiodjsaofjsljfsdjs oisjdopsjaiofps78rh oisjdaofjdsfsj",
  // },

  // {
  //   id: 5,
  //   imgSrc: img5,
  //   destTitle: "Tailandia",
  //   location: "Asia",
  //   grade: "Viaje Ensueño",
  //   fee: "$850",
  //   description:
  //     "Lorem ipsum kansdlkaadasdasdskndnuih khnjksahsdhjk ywoeiuahhas ghsdhasio jsdoifskfl jiodjsaofjsljfsdjs oisjdopsjaiofps78rh oisjdaofjdsfsj",
  // },

  // {
  //   id: 6,
  //   imgSrc: img6,
  //   destTitle: "Tailandia",
  //   location: "Asia",
  //   grade: "Viaje Ensueño",
  //   fee: "$850",
  //   description:
  //     "Lorem ipsum kansdlkaadasdasdskndnuih khnjksahsdhjk ywoeiuahhas ghsdhasio jsdoifskfl jiodjsaofjsljfsdjs oisjdopsjaiofps78rh oisjdaofjdsfsj",
  // },

  // {
  //   id: 7,
  //   imgSrc: img7,
  //   destTitle: "Tailandia",
  //   location: "Asia",
  //   grade: "Viaje Ensueño",
  //   fee: "$850",
  //   description:
  //     "Lorem ipsum kansdlkaadasdasdskndnuih khnjksahsdhjk ywoeiuahhas ghsdhasio jsdoifskfl jiodjsaofjsljfsdjs oisjdopsjaiofps78rh oisjdaofjdsfsj",
  // },

  // {
  //   id: 8,
  //   imgSrc: img8,
  //   destTitle: "Tailandia",
  //   location: "Asia",
  //   grade: "Viaje Ensueño",
  //   fee: "$850",
  //   description:
  //     "Lorem ipsum kansdlkaadasdasdskndnuih khnjksahsdhjk ywoeiuahhas ghsdhasio jsdoifskfl jiodjsaofjsljfsdjs oisjdopsjaiofps78rh oisjdaofjdsfsj",
  // },

  // {
  //   id: 9,
  //   imgSrc: img9,
  //   destTitle: "Tailandia",
  //   location: "Asia",
  //   grade: "Viaje Ensueño",
  //   fee: "$850",
  //   description:
  //     "Lorem ipsum kansdlkaadasdasdskndnuih khnjksahsdhjk ywoeiuahhas ghsdhasio jsdoifskfl jiodjsaofjsljfsdjs oisjdopsjaiofps78rh oisjdaofjdsfsj",
  // },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Destinos Más Visitados</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fee, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fee}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
