let provider;
let signer;
let currentAccount = null;

async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    alert(
      "Wallet not detected.\n\n" +
      "Please open this website using MetaMask Browser."
    );
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

    const status = document.getElementById("walletStatus");
    if (status) status.innerText = "Wallet connected";

    console.log("Connected:", currentAccount);

  } catch (err) {
    console.error("Connect error:", err);
    alert("User rejected connection or wallet error");
  }
}
