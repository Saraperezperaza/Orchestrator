const ACQUIRE_URL = process.env.ACQUIRE_URL;

async function fetchAcquire() {
  const response = await fetch(ACQUIRE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  });
  if (!response.ok) {
    throw new Error("ACQUIRE_ERROR_" + response.status);}
  const data = await response.json();
  return data;
}

module.exports = {
  fetchAcquire
};