import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsSignal } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_38xsvr6",
        "template_iar3pla",
        form.current,
        "02bbp4GgDQyu4ufqM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Schreib mich an!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <arcticle className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>E-Mail</h4>
            <h5>safiullahrahmani1993@gmail.com</h5>
            <a
              href="https://mailto:safiullahrahmani1993@gmail.com"
              target="_blank"
            >
              Schreib mir eine Nachricht
            </a>
            <br />
          </arcticle>
          <arcticle className="contact__option">
            <BsSignal className="contact__option-icon" />
            <h4>Signal</h4>
            <a href="https://signal.me/#p/+905512731684" target="_blank">
              Kontaktiere mich
            </a>
            <br />
          </arcticle>
          <arcticle className="contact__option">
            <TbBrandTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <a href="mailto:safiullahrahmani1993@gmail.com" target="_blank">
              Kontaktiere mich
            </a>
          </arcticle>
        </div>
        {/* Ende of contact*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Vor- und Nachname"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Nachricht"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
