import React from "react";

const About = () => {
  return (
    <div className="text-center mt-5" id="about">
      <h1 className=" text-2xl md:text-3xl mb-5 text-primary font-semibold">
        À propos de moi
      </h1>
      <div className=" bg-[#181824] rounded-3xl text-center px-7 mt-4 md:px-10 py-7 md:py-16">
        <p className="text-gray-300 my-2 md:w-full leading-[2]">
          Je suis développeur front-end avec un parcours initial en simulation
          numérique de l'ingénieur.Ce parcours antérieure m' a doté des
          compétences essentielles telles que l'organisation, la collaboration
          en équipe, et une grande capacité d'écoute, acquises au cours de
          divers projets et stages. <br /> Après ma reconversion professionnelle
          dans le domaine du développement web, j'ai réussi à obtenir mon
          diplôme chez OpenClassRooms, ce qui m' a permis de devenir autonome
          dans la réalisation des projets web. Ma passion pour le développement
          front-end et le web design continue de me motiver dans cette nouvelle
          phase de ma carrière.
        </p>
      </div>
    </div>
  );
};

export default About;
