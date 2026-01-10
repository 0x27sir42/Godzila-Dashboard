const RATE = 1560;
const MIN_POL = 10;

function calcZila() {
  const pol = Number(document.getElementById("polAmount").value);
  document.getElementById("zilaAmount").innerText = pol * RATE;
}

async function buyZila() {
  if (!userAddress) return alert("Connect wallet first");

  const pol = Number(document.getElementById("polAmount").value);
  if (pol < MIN_POL) return alert("Minimum buy is 10 POL");

  alert("Presale tx handled by smart contract");
}
