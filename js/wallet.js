// js/wallet.js
let provider;
let signer;
let currentAccount = null;

async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("MetaMask not detected");
    return;
  }

  try {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    currentAccount = await signer.getAddress();

    document.querySelectorAll(".connectBtn").forEach(btn => {
      btn.innerText =
        currentAccount.slice(0, 6) +
        "..." +
        currentAccount.slice(-4);
    });

    console.log("CONNECTED:", currentAccount);
  } catch (err) {
    console.error("CONNECT ERROR:", err);
    alert("Failed to connect wallet");
  }
}
