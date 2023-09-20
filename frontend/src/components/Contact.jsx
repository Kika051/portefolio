import React from "react"; // Assurez-vous d'importer React si ce n'est pas déjà fait
import Header from "./Header";
import github from "../Pictures/github.png";
import linkedin from "../Pictures/linkedin.png";

function Contact() {
  return (
    <div>
      <Header />
      <h1 className="projetlist">Contactez-moi</h1>
      <h2 className="contact" style={{ whiteSpace: "pre-line" }}>
        Vous avez une question, un projet intéressant à discuter ou simplement
        envie de dire bonjour ?{"\n"}
        Je suis toujours ouvert aux nouvelles opportunités de collaboration.
        {"\n"}
        N'hésitez pas à me contacter via l'une des méthodes ci-dessous :
      </h2>
      <h3 className="form-contact" style={{ whiteSpace: "pre-line" }}>
        Adresse mail : Geron-f@outlook.fr{"\n"}
      </h3>
      <h2 className="contact">Mes réseaux :</h2>
      <div className="container-logo">
        <a
          href="https://www.linkedin.com/in/florian-geron-613042224/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            className="logo"
            alt="Grapefruit slice atop a pile of other slices"
          />
        </a>
        <a
          href="https://github.com/Kika051/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="logo" alt="github" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
