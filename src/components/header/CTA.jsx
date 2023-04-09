import React from "react";
import "./cta.css";
import CV from "../../assets/Lebenslauf.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Lebenslauf herunterladen
      </a>
      <a href="#contact" className="btn btn-primary">
        Schreib mich an!
      </a>
    </div>
  );
};

export default CTA;
