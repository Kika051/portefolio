import React, { useState } from "react";
import Header from "./Header";

function AddProjet() {
  const [projet, setProjet] = useState({
    title: "",
    screen: "",
    url: "",
    client: "",
    techno: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjet({
      ...projet,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construit le corps de la requête avec les détails du projet
    const requestBody = {
      title: projet.title,
      screen: projet.screen,
      url: projet.url,
      client: projet.client,
      techno: projet.techno,
      description: projet.description,
    };

    // Effectue la requête POST vers votre backend
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"}/projets`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de l'ajout du projet");
        }
        return response.json();
      })
      .then((data) => {
        // Le projet a été ajouté avec succès dans la base de données
        // eslint-disable-next-line no-restricted-syntax
        console.log("Projet ajouté :", data);

        // Réinitialise le formulaire après soumission
        setProjet({
          title: "",
          screen: "",
          url: "",
          client: "",
          techno: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Erreur :", error);
        // Gérer l'erreur si la requête échoue
      });
  };

  return (
    <div className="portfolio-page">
      <Header />
      <h2 className="title">AJOUTER UN PROJET</h2>
      <div className="formulaire">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              id="title"
              name="title"
              value={projet.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="screen">Capture d'écran (URL)</label>
            <input
              type="text"
              id="screen"
              name="screen"
              value={projet.screen}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="url">URL du projet</label>
            <input
              type="text"
              id="url"
              name="url"
              value={projet.url}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="client">Client</label>
            <textarea
              id="client"
              name="client"
              value={projet.client}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="techno">Technologies utilisées</label>
            <textarea
              id="techno"
              name="techno"
              value={projet.techno}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={projet.description}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
}

export default AddProjet;
