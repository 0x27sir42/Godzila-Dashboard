let provider;
let signer;
let currentAccount = null;

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask is not installed");
    return;
  }

  try {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    currentAccount = await signer.getAddress();

    document.querySelectorAll(".connectBtn").forEach(btn => {
      btn.innerText =
        "Connected: " +
        currentAccount.slice(0, 6) +
        "..." +
        currentAccount.slice(-4);
    });

    console.log("Wallet connected:", currentAccount);
  } catch (err) {
    console.error(err);
    alert("Wallet connection failed");
  }
}
