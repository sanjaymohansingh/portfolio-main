import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          {" "}
          I’m currently searching for opportunities for a full stack developer
          role. <br /> If there is any vacancy my inbox is always open. Whether{" "}
          <br /> you have any further questions or just want to say hi, <br />{" "}
          I’ll try my best to get back to you!
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://wa.me/+918299106467");
          }}
        >
          Say Hello
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2024
          <hr />
          Designed & Built by <span>Sanjay Mohan Singh</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
