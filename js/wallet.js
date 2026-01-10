let provider;
let signer;
let userAddress;

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask not found");
    return;
  }

  try {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    userAddress = await signer.getAddress();

    document.querySelectorAll("#walletStatus").forEach(el => {
      el.innerText = "Connected: " + userAddress.slice(0,6) + "..." + userAddress.slice(-4);
    });

    alert("Wallet connected");
  } catch (err) {
    console.error(err);
    alert("Wallet connection failed");
  }
}
