const RATE = 1560;

document.getElementById("polAmount")?.addEventListener("input", () => {
  const pol = Number(document.getElementById("polAmount").value || 0);
  document.getElementById("zilaAmount").innerText = pol * RATE;
});

function buyZila() {
  if (!account) return alert("Connect wallet first");

  const pol = document.getElementById("polAmount").value;
  const zila = pol * RATE;

  addHistory("Presale", `Bought ${zila} ZILA with ${pol} POL`);
  alert("Presale transaction submitted");
  renderHistory();
}
