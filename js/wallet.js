<script src="https://unpkg.com/@walletconnect/web3-provider@1.8.0/dist/umd/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.min.js"></script>

<script>
let wcProvider;
let web3Provider;
let signer;
let userAddress;

async function connectWallet() {
  try {
    wcProvider = new WalletConnectProvider.default({
      rpc: {
        137: "https://polygon-rpc.com"
      }
    });

    await wcProvider.enable();

    web3Provider = new ethers.providers.Web3Provider(wcProvider);
    signer = web3Provider.getSigner();
    userAddress = await signer.getAddress();

    document.querySelectorAll(".connectBtn").forEach(btn => {
      btn.innerText =
        userAddress.slice(0, 6) + "..." + userAddress.slice(-4);
    });

    console.log("Connected:", userAddress);

  } catch (e) {
    alert("Wallet connection failed");
    console.error(e);
  }
}
</script>
