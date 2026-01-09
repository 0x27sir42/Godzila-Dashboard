const RATE = 1560;

document.getElementById("polAmount").addEventListener("input", () => {
  const pol = Number(document.getElementById("polAmount").value);
  document.getElementById("zilaAmount").innerText = pol * RATE;
});

function buyZila() {
  alert("Transaction will be handled via smart contract.");
}
