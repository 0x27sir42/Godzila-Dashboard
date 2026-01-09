let provider, signer, userAddress;

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask not installed");
    return;
  }

  provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  userAddress = await signer.getAddress();

  const el = document.getElementById("walletAddress");
  if (el) el.innerText = "Connected: " + userAddress;
}
