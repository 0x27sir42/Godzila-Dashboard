const ZILA_TOKEN = "0xZILA_TOKEN_ADDRESS";
const STAKING_CONTRACT = "0xSTAKING_CONTRACT_ADDRESS";

const ZILA_ABI = [
  "function approve(address spender, uint256 amount) public returns (bool)"
];

const STAKING_ABI = [
  "function stake(uint256 amount, uint8 lockType) public"
];

async function stake() {
  if (!currentAccount) {
    alert("Please connect wallet first");
    return;
  }

  const amount = document.getElementById("stakeAmount").value;
  if (amount <= 0) {
    alert("Enter amount");
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const token = new ethers.Contract(ZILA_TOKEN, ZILA_ABI, signer);
  const staking = new ethers.Contract(STAKING_CONTRACT, STAKING_ABI, signer);

  const weiAmount = ethers.utils.parseUnits(amount, 18);

  // 1️⃣ APPROVE
  const approveTx = await token.approve(STAKING_CONTRACT, weiAmount);
  await approveTx.wait();

  // 2️⃣ STAKE
  const stakeTx = await staking.stake(weiAmount, 1); // 1 = 12 months
  await stakeTx.wait();

  alert("Staking successful!");
}
