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

    // Update UI
    document.getElementById("connectBtn").innerText =
      "Connected: " +
      currentAccount.slice(0, 6) +
      "..." +
      currentAccount.slice(-4);

    document.getElementById("walletStatus").innerText =
      "Wallet connected";

    // Enable staking UI
    document.getElementById("lock").disabled = false;
    document.getElementById("stakeAmount").disabled = false;
    document.getElementById("stakeBtn").disabled = false;
    document.getElementById("claimBtn").disabled = false;

    console.log("Wallet connected:", currentAccount);

  } catch (err) {
    console.error(err);
    alert("Wallet connection failed");
  }
}
