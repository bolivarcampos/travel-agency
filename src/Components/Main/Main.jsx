import React, { useEffect } from "react";
import "./main.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img from "../../Assets/1.jpg";
import img2 from "../../Assets/2.jpg";
import img3 from "../../Assets/3.jpg";
import img4 from "../../Assets/4.jpg";
import img5 from "../../Assets/5.jpg";
import img6 from "../../Assets/6.jpg";
import img7 from "../../Assets/7.jpg";
import img8 from "../../Assets/8.jpg";
import img9 from "../../Assets/9.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Tailandia",
    location: "Asia",
    grade: "Viaje Ensueño",
    fee: "$850",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id facilisis magna. In molestie condimentum diam vel mollis. Sed et elementum lacus, et viverra nulla. Phasellus vehicula ante at dictum placerat.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Bora Bora",
    location: "Asia",
    grade: "Viaje Playa",
    fee: "$1450",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id facilisis magna. In molestie condimentum diam vel mollis. Sed et elementum lacus, et viverra nulla. Phasellus vehicula ante at dictum placerat.",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Venezia",
    location: "Italia",
    grade: "Viaje Romántico",
    fee: "$785",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id facilisis magna. In molestie condimentum diam vel mollis. Sed et elementum lacus, et viverra nulla. Phasellus vehicula ante at dictum placerat.",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "El Cairo",
    location: "Egipto",
    grade: "Viaje Histórico",
    fee: "$735",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id facilisis magna. In molestie condimentum diam vel mollis. Sed et elementum lacus, et viverra nulla. Phasellus vehicula ante at dictum placerat.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Canada",
    location: "América",
    grade: "Explorador",
    fee: "$550",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id facilisis magna. In molestie condimentum diam vel mollis. Sed et elementum lacus, et viverra nulla. Phasellus vehicula ante at dictum placerat.",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "San Diego",
    location: "EEUU",
    grade: "Viaje Playero",
    fee: "$650",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id facilisis magna. In molestie condimentum diam vel mollis. Sed et elementum lacus, et viverra nulla. Phasellus vehicula ante at dictum placerat.",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "San Francisco",
    location: "EEUU",
    grade: "Viaje América",
    fee: "$385",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id facilisis magna. In molestie condimentum diam vel mollis. Sed et elementum lacus, et viverra nulla. Phasellus vehicula ante at dictum placerat.",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Bora Bora",
    location: "Asia",
    grade: "Viaje Parejas",
    fee: "$995",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id facilisis magna. In molestie condimentum diam vel mollis. Sed et elementum lacus, et viverra nulla. Phasellus vehicula ante at dictum placerat.",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Capadoccia",
    location: "Turquia",
    grade: "Siente la Magia",
    fee: "$1150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id facilisis magna. In molestie condimentum diam vel mollis. Sed et elementum lacus, et viverra nulla. Phasellus vehicula ante at dictum placerat.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle grid">
        <h3 className="title" data-aos="fade-right">
          Destinos Más Visitados
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fee, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
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

                  <button className="btn flex">
                    DETALLES <HiOutlineClipboardCheck className="icon" />
                  </button>
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
