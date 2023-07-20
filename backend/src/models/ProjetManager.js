const AbstractManager = require("./AbstractManager");

class projetManager extends AbstractManager {
  constructor() {
    super({ table: "projet" }); // Modifier le nom de la table en "projet"
  }

  insert(projet) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, screen, url, client, techno, description) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        projet.title,
        projet.screen,
        projet.url,
        projet.client,
        projet.techno,
        projet.description,
      ]
    );
  }

  update(projet) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, screen = ?, url = ?, client = ?, techno = ?, description = ? WHERE id = ?`,
      [
        projet.title,
        projet.screen,
        projet.url,
        projet.client,
        projet.techno,
        projet.description,
        projet.id,
      ]
    );
  }
}

module.exports = projetManager;
