import React from "react";

import "./about.scss";

export const About = () => {
  return (
    <div
      className="about__container"
      //style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div
        className="about-description"
        //style={{ background: "aliceblue", width: "50%" }}
      >
        <div className="about-description-container">
          <h2>Syllabary Project</h2>

          <span>
            Por qué silabarios? El interés por crear este proyecto surge por una
            parte para estudiar los syllabarios japoneses, en particular el
            Katakana (para mi éste ha sido el mas complicado). Pensé que sería
            útil para quien quisiera adentrarse en este camino de aprendizaje y
            quisiera poner a prueba sus conocimientos del silabario, o
            practicar.
          </span>
          <span>
            El 2019 estuvo lleno de cambios, uno de ellos fue que ingresé a un
            bootcamp (Laboratoria). Y con ello empezé a caminar por un rumbo que
            no había imaginado. El camino de aprender programación e iniciarme
            en la travesía de aprender javascript. Como algunos ya sabrán, el
            tiempo en un bootcamp es poco, pero ese tiempo también dió para dar
            los primeros pasos en React, y un poco de Node también.
          </span>
          <span>
            Creé este proyecto además por las razones ya mencionadas, porque me
            pareció una muy buena manera de poner en práctica y mejorar mis
            skills tecnicas. Empecé a desarrollar esta web app hace
            aproximadamente un año (agosto 2019) utilizando React, react hooks,
            y propTypes. después de un año decidí hacer un refactor y poner en
            práctica las cosas que aprendí durante este año. Aun hacen falta
            algunas iteraciones para poder completar el refactor y las mejoras
            contempladas.
          </span>
          <span>Stack</span>
          <span>React, Typescript, Sass</span>
        </div>
      </div>
      <div
        className="about-contact"
        //style={{ background: "grey", width: "50%" }}
      >
        <h2>Contact</h2>
      </div>
    </div>
  );
};
