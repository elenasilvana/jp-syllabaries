import React from "react";

import { ReactComponent as LinkedinIcon } from "../icons/icon-linkd.svg";

import "./about.scss";

export const About = () => {
  return (
    <div
      className="about__container"
      //style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="about-description">
        <div className="about-description-container">
          <h2>Syllabary Project</h2>
          <span>
            I'm Elena Casillas, I studied Visual Arts as a career, with a main
            interest on photography. But I am currently working as Software
            Developer.
          </span>
          <span>
            In 2019 I decided to start a new career path related to Information
            technologies so I joint a bootcamp called Laboratoria, and started
            my programmer journey. As some of you may know the time in a
            bootcamp is short but it was at least enough to provide me with the
            first steps on React JS and Node.
          </span>
          <span>
            <strong>Why is this project about syllabaries?</strong>
          </span>
          <span>
            One of my reasons to create this project was to study and learn
            Japanese syllabaries, in particular to practice katakana syllabary
            (that is for me the more complicated). I thought it would also be
            useful for those who are learning Japanese and who want to test
            their knowledge or just to practice.
          </span>
          <span>
            I found the creation of this app interesting and challenging and a
            way to improve my tech skills. The first version of this app was
            develop in August 2019 using React, hooks and prop types. A year
            later I came up with some ideas from what I've learned studying and
            working and decided to do a refactor. I am going to continue working
            on completing the code changes and the UI changes needed to achieve
            what I have in mind for a newer version.
          </span>
          <span>Stack</span>
          <span>React, Typescript, Sass</span>
        </div>
      </div>
      <div className="about-contact">
        <h2>Contact</h2>
        <span className="about-contact-role">Front-End Developer Junior</span>
        <span>Elena Silvana Casillas</span>
        <a href={"https://www.linkedin.com/in/elena-silvana-c/"}>
          <LinkedinIcon className="about-contact-icon" />
        </a>
      </div>
    </div>
  );
};
