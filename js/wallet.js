let currentAccount = null;

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask is not installed");
    return;
  }

  const accounts = await ethereum.request({
    method: "eth_requestAccounts"
  });

  currentAccount = accounts[0];

  document.querySelectorAll(".connectBtn").forEach(btn => {
    btn.innerText =
      "Connected: " +
      currentAccount.slice(0, 6) +
      "..." +
      currentAccount.slice(-4);
  });
}
