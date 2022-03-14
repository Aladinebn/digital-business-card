import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Name.css";

const Name = () => {
  return (
    <div className="contact">
      <img
        src="/images/myprofilephoto.jpg"
        alt="myphoto"
        style={{
          height: "300px",
          width: "300px",
        }}
      />
      <div className="info">
        <h1>Ala Eddine Benna</h1>
        <h3>Frontend developer</h3>
        <a href="#" style={{ textDecoration: "none" }}>
          <h5>alabenna.com</h5>
        </a>
      </div>
      <div className="contact-button">
        <button>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="s"
            style={{ paddingRight: "10px" }}
          />
          Email
        </button>
        <button style={{ backgroundColor: "#5093E2" }}>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="s"
            color="black"
            style={{ paddingRight: "10px" }}
          />
          Linkedin
        </button>
      </div>
    </div>
  );
};

export default Name;
