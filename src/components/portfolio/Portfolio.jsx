import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Chopan",
    github: "https://github.com/SafiullahRahmani/Chopan",
    demo: "https://chopan-5dea4.web.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Real Facebook",
    github: "https://github.com/SafiullahRahmani/real_facebook",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Kostenrechner",
    github: "https://github.com/SafiullahRahmani/Kostenrechner",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Chopan",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG3,
    title: "Chopan",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG4,
    title: "Chopan",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Folgendes habe ich bihser enwickelt</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
