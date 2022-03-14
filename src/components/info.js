import React from "react";

const Info = () => {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <div>
        <h3 style={{ paddingBottom: "5px" }}>About</h3>
        <p
          style={{
            paddingBottom: "15px",
            fontSize: "13px",
            lineHeight: "16.37px",
          }}
        >
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div>
        <h3 style={{ paddingBottom: "5px" }}>Interests</h3>
        <p
          style={{
            paddingBottom: "15px",
            fontSize: "13px",
            lineHeight: "16.37px",
          }}
        >
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
};

export default Info;
