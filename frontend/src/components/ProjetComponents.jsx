import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";

function ProjetComponents() {
  const [projet, setProjet] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"
      }/projets/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProjet(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération du projet",
          error
        );
      });
  }, [id]);
  const handleDelete = () => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"
      }/projets/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la suppression du projet");
        }
        alert("Projet supprimé avec succès");
        window.location.href = "/portfolio";
      })
      .catch((error) => {
        console.error("Erreur :", error);
      });
  };
  return (
    <div>
      <Header />
      <div className="Projet">
        <h1>{projet.title}</h1>
        <label htmlFor="screen">Capture d'écran (URL)</label>
        <img
          src={projet.screen}
          alt="Capture d'écran du projet"
          className="screen"
        />
        <label htmlFor="client">Client</label>
        <p>{projet.client}</p>
        <label htmlFor="techno">Technologies utilisées</label>
        <p>{projet.techno}</p>
        <label htmlFor="description">Description</label>
        <p>{projet.description}</p>
        <label htmlFor="url">URL du projet</label>
        <p>
          <a href={projet.url} target="_blank" rel="noopener noreferrer">
            {projet.url}
          </a>
        </p>
      </div>{" "}
      <Link to={`/edit/${id}`} className="adminbutt">
        Modifié le projet
      </Link>
      <button type="button" className="adminbutt" onClick={handleDelete}>
        Supprimer
      </button>
    </div>
  );
}

export default ProjetComponents;
