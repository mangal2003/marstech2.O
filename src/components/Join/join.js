import React, { useRef } from "react";
import "./join.css";
import emailjs from "@emailjs/browser";
import Partition from "../Partition/partition";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_unpt23j",
        "template_ryqzom5",
        form.current,
        "W-ghWs-nKjXUvCVe6"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully! We will contact you soon.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form id="contactForm" ref={form} onSubmit={sendEmail}>
      <Partition name="CONTACT US" />
      <input
        type="text"
        className="name"
        name="user_name"
        placeholder="Your Name"
      />
      <input
        type="email"
        className="email"
        name="user_email"
        placeholder="Your Email"
      />
      <textarea
        name="message"
        className="msg"
        rows="4"
        placeholder="Your Message"
      ></textarea>
      <button type="submit" value="send" className="submitBtn">
        Submit
      </button>
    </form>
  );
};

export default Join;
