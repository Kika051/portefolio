import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import fondImage from "../Pictures/Fond.png";
import "../App.css";

function Home({ hideHome }) {
  return (
    <div className="home-container">
      <img src={fondImage} alt="Fond d'écran" className="home-image" />
      <div className="home-heading">
        <h1>
          Hi I'm GERON Florian and I'm a junior web developer, welcome to my
          portfolio
        </h1>
        <Link to="/portfolio" className="button_port" onClick={hideHome}>
          Accéder à mon portfolio
        </Link>
      </div>
    </div>
  );
}

Home.propTypes = {
  hideHome: PropTypes.func.isRequired,
};

export default Home;
