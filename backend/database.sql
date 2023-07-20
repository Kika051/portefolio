CREATE TABLE admin (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(200) NOT NULL
);

CREATE TABLE projet (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(150),
  screen VARCHAR(500),
  url VARCHAR(500),
  client TEXT NOT NULL,
  techno TEXT NOT NULL,
  description TEXT NOT NULL
);


INSERT INTO admin (username, password) VALUES ('Admin', 'admin');

INSERT INTO projet (title, screen, url, client, techno, description) 
VALUES 
  ('Wild Clicker', './Images/CC2022.png', 'https://kika051.github.io/Projet-1-Wild-Clickers/', 'Wild code School', 'Javascript', 'Jeu inspiré du célèbre jeu Cookie Clicker'),
  ('Wild Beer', './Images/WB2023.png', 'https://wildbeerproject2.netlify.app/', 'Wild code School', 'React', 'Jeu de cartes sur le thème des bières'),
  ('Hackathon : Travel On', './Images/TO2023.png', 'https://github.com/Rinawaticodes/Hackathon-TravelOn', 'Wild code School', 'React', 'Application qui a pour but de trouver une activité proche de votre hôtel'),
  ('Origin Digital', './Images/OD2023.png', 'https://github.com/WildCodeSchool/2023-02-JS-Reims-project-3-origins-digital', 'Origin digital', 'React', 'Plateforme freemium de courtes vidéos de sport');

