async function connectWallet() {
  if (!window.ethereum) {
    alert("Please install MetaMask");
    return;
  }
  const acc = await ethereum.request({ method: "eth_requestAccounts" });
  document.getElementById("walletAddress").innerText =
    "Wallet: " + acc[0];
}
