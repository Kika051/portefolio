import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProjetList() {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6000"}/projets`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des projets");
        }
        return response.json();
      })
      .then((data) => {
        setProjets(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des projets",
          error
        );
      });
  }, []);

  return (
    <div>
      <h1 className="projetlist">Liste des projets</h1>
      <div className="project-cards-container">
        {projets.map((projet) => (
          <div key={projet.id} className="projet-block">
            <div className="projet-card">
              <h2>{projet.title}</h2>
              <p>{projet.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/add" className="adminbutt">
        Ajouté un projet
      </Link>
    </div>
  );
}

export default ProjetList;
