const PREDICT_URL = process.env.PREDICT_URL;

async function fetchPredict(acquireData) {
  const body = {
    features: acquireData.features,
    meta: {
      featureCount: acquireData.featureCount,
      dataId: acquireData.dataId,
      source: "orchestrator"
    }
  };

  const response = await fetch(PREDICT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error("PREDICT_ERROR_" + response.status);
  }

  const data = await response.json();
  return data;
}

module.exports = { fetchPredict };
