import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function EditProjet() {
  const [projet, setProjet] = useState({
    title: "",
    screen: "",
    url: "",
    client: "",
    techno: "",
    description: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjet({
      ...projet,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title: projet.title,
      screen: projet.screen,
      url: projet.url,
      client: projet.client,
      techno: projet.techno,
      description: projet.description,
    };

    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"
      }/projets/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la mise à jour du projet");
        }
        alert("Projet mis à jour avec succès");
      })
      .catch((error) => {
        console.error("Erreur :", error);
      });
  };

  return (
    <div className="portfolio-page">
      <Header />
      <h2 className="title">MODIFIER LE PROJET</h2>
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
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
}

export default EditProjet;
