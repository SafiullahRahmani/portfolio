import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hallo, ich heiße</h5>
        <h1>Safiullah Rahmani</h1>
        <h5 className="text-light">Fullstack Junior Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Safiullah Rahmani" />
        </div>

        {/* <a href="#contact" className="scroll__down">
          Scroll down
        </a> */}
      </div>
    </header>
  );
};

export default Header;
