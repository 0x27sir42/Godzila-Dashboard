let provider;
let signer;
let userAddress = null;

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask is not installed");
    return;
  }

  provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  userAddress = await signer.getAddress();

  // Show connected wallet
  document.getElementById("walletAddress").innerText =
    "Connected: " + userAddress.slice(0, 6) + "..." + userAddress.slice(-4);

  // Change button text
  const btn = document.querySelector(".w3-green");
  if (btn) btn.innerText = "Connected";

  // Load ZILA balance
  await loadZilaBalance();
}
