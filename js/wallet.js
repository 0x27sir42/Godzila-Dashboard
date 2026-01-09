let userAccount = null;

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask not installed");
    return;
  }

  const accounts = await ethereum.request({
    method: "eth_requestAccounts"
  });

  userAccount = accounts[0];
  document.getElementById("connectBtn").innerText =
    userAccount.slice(0,6) + "..." + userAccount.slice(-4);

  await ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x89" }]
  });
}
