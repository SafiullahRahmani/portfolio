import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Lerne mich</h5>
      <h2 className="lerne-mich-kennen">kennen</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
            <div className="loading">
              <h5>Nächster Halt zu einem erfahrenen Programmier:</h5>
              <h3>Loading...</h3>
            </div>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Erfahrung</h5>
              <small>2 Jahre Selbstentwicklung</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Keine</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projekte</h5>
              <small>6 Abgeschlossen</small>
            </article>
          </div>
          <p>
            Ich habe ein abgeschlossenes Studium in der Persischen Literatur.
            Programmieren und Literatur haben einiges gemeinsam: man muss sich
            über die Details eines Themas auseinandergesetzt haben, um den
            Überblick im Ganzen gewinnen zu können. Es ist ein Muskeltraining,
            wie einst unser Softwareentwicklung Prof. uns sagte. <br /> Bis zum
            Sommersemester 2022 studierte ich Informatik an der TU München, und
            seit dem letzten Wintersemester studiere ich nun
            Wirtschaftsinformatik an der HM München. Ich ineteressiere mich
            sowohl für die Backend- aber auch für die Frontend-Entwicklung.
          </p>

          <a href="#contact" className="btn btn-primary">
            Schreib mich an!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
