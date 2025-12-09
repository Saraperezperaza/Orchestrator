// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const orchestratorRoutes = require("./routes/orchestratorRoutes");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

// Contrato del orquestador
app.use("/", orchestratorRoutes);

app.listen(PORT, () => {
  console.log(`[ORCHESTRATOR] Servicio escuchando en http://localhost:${PORT}`);
});
