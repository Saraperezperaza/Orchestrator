const { fetchAcquire } = require("./acquireService");
const { fetchPredict } = require("./predictService");

async function runwork() {
  const acquireResult = await fetchAcquire();
  const predictResult = await fetchPredict(acquireResult);

  return {
    dataId: acquireResult.dataId,
    predictionId: predictResult.predictionId,
    prediction: predictResult.prediction,
    timestamp: predictResult.timestamp
  };
}

module.exports = { runwork };
