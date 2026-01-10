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

    // Update semua tombol connect
    document.querySelectorAll(".connectBtn").forEach(btn => {
      btn.innerText =
        "Connected: " +
        currentAccount.slice(0, 6) +
        "..." +
        currentAccount.slice(-4);
    });

    // Update status jika ada
    const status = document.getElementById("walletStatus");
    if (status) status.innerText = "Wallet connected";

    // Enable presale fields
    if (document.getElementById("polAmount")) {
      document.getElementById("polAmount").disabled = false;
      document.getElementById("buyBtn").disabled = false;
      document.getElementById("claimBtn").disabled = false;
    }

    // Enable staking fields (kalau di halaman staking)
    if (document.getElementById("stakeAmount")) {
      document.getElementById("lock").disabled = false;
      document.getElementById("stakeAmount").disabled = false;
      document.getElementById("stakeBtn").disabled = false;
      document.getElementById("claimBtn").disabled = false;
    }

    console.log("Wallet connected:", currentAccount);

  } catch (err) {
    console.error(err);
    alert("Wallet connection failed");
  }
}
