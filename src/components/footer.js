import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#161619",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px 20px 50px",
      }}
    >
      <FontAwesomeIcon
        icon={faTwitter}
        size="2x"
        color="#161619"
        style={{ backgroundColor: "#918E9B", borderRadius: "5px" }}
      />
      <FontAwesomeIcon
        icon={faFacebook}
        size="2x"
        color="#161619"
        style={{ backgroundColor: "#918E9B", borderRadius: "5px" }}
      />
      <FontAwesomeIcon
        icon={faInstagram}
        size="2x"
        color="#161619"
        style={{ backgroundColor: "#918E9B", borderRadius: "5px" }}
      />
      <FontAwesomeIcon
        icon={faGithub}
        size="2x"
        color="#161619"
        style={{ backgroundColor: "#918E9B", borderRadius: "5px" }}
      />
    </div>
  );
};

export default Footer;
