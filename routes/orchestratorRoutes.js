const express = require("express");
const router = express.Router();
const orchestratorController = require("../controllers/orchestratorController");
// POST /run
// GET /health
router.get("/health", orchestratorController.health);
router.post("/run", orchestratorController.run);

module.exports = router;