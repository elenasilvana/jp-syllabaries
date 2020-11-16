import React from "react";

export const About = () => {
  return (
    <div
      className="about__container"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div
        className="about-description"
        style={{ background: "aliceblue", width: "50%" }}
      >
        <h2>Project</h2>
      </div>
      <div
        className="about-contact"
        style={{ background: "grey", width: "50%" }}
      >
        <h2>Contact</h2>
      </div>
    </div>
  );
};
