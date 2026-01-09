let userAccount = null;

async function connectWallet() {
  if (!window.ethereum) {
    alert("Please install MetaMask");
    return;
  }

  const accounts = await ethereum.request({
    method: "eth_requestAccounts"
  });

  userAccount = accounts[0];
  document.getElementById("walletAddress").innerText =
    "Wallet: " + userAccount;
}
