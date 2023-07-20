import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function ProjetComponents() {
  const [projet, setProjet] = useState({});
  const { projetId } = useParams();

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"
      }/projet/${projetId}`
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
  }, [projetId]);

  return (
    <div>
      <Header />
      <h1>{projet.title}</h1>
      <p>{projet.screen}</p>
      <p>{projet.client}</p>
      <p>{projet.techno}</p>
      <p>{projet.description}</p>
    </div>
  );
}

export default ProjetComponents;
