import React, { useEffect } from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";

import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container" data-aos="fade-up">
        <div className="contactDiv flex">
          <div className="text">
            <small>MANTENTE EN CONTACTO</small>
            <h2>Viaja con Nosotros</h2>
          </div>

          <div className="inputDiv flex" data-aos="fade-up">
            <input type="text" placeholder="Ingresa tu Email" />
            <button className="btn flex" type="submit">
              ENVIA <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex" data-aos="fade-up">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#." className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              dicta, numquam assumenda aut sed omnis provident!
            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* uno */}
            <div className="linkGroup">
              <span className="groupTitle">AGENCIA</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Servicios
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Seguros
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Agencia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Turismo
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Pagos
              </li>
            </div>
            {/* dos */}
            <div className="linkGroup">
              <span className="groupTitle">SOCIOS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Reservas
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> RentCar
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> TripAdvisor
              </li>
            </div>
            {/* tres */}
            <div className="linkGroup">
              <span className="groupTitle">REBAJAS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Londres
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Cuba
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Italia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Australia
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>MEJOR PÁGINA WEB DE VIAJES</small>
            <small>
              COPYRIGHTS RESERVADOS - T&B AGENCY - RAMON BOLIVAR 2023
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
