const express = require("express");

const router = express.Router();

const projetControllers = require("./controllers/projetControllers");

router.get("/projets", projetControllers.browse);
router.get("/projets/:id", projetControllers.read);
router.put("/projets/:id", projetControllers.edit);
router.post("/projets", projetControllers.add);
router.delete("/projets/:id", projetControllers.destroy);

module.exports = router;
