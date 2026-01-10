let provider;
let signer;
let currentAccount;

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask not installed");
    return;
  }

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

  console.log("Connected:", currentAccount);
}
