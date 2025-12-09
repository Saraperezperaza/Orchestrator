const { runwork } = require("../services/orchestratorService");

async function health(req, res) {
  res.json({
    status: "ok",
    service: "orchestrator"
  });
}

async function run(req, res) {
  try {
    const result = await runwork();
    return res.json(result);
  } catch (err) {

    console.error("[ORCHESTRATOR] ERROR:", err.message);

    if (err.message.startsWith("ACQUIRE") || err.message.startsWith("PREDICT")) {
      return res.status(502).json({
        message: "Error en un servicio externo",
        error: err.message
      });
    }

    return res.status(500).json({
      message: "Error interno del orquestador",
      error: err.message
    });
  }
}

module.exports = {
  health,
  run
};
