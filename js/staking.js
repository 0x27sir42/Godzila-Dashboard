/***********************
 * CONFIG (EDIT THIS)
 ***********************/
const ZILA_TOKEN_ADDRESS = "0xYOUR_ZILA_TOKEN_ADDRESS"; // GANTI
const ZILA_DECIMALS = 18;

/***********************
 * GLOBAL STATE
 ***********************/
let zilaContract;
let walletBalance = 0;
let staked = 0;
let rewards = 0;

/***********************
 * ERC20 ABI
 ***********************/
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)"
];

/***********************
 * LOAD REAL BALANCE
 ***********************/
async function loadZilaBalance() {
  if (!signer || !userAddress) return;

  zilaContract = new ethers.Contract(
    ZILA_TOKEN_ADDRESS,
    ERC20_ABI,
    provider
  );

  const raw = await zilaContract.balanceOf(userAddress);
  walletBalance = Number(
    ethers.utils.formatUnits(raw, ZILA_DECIMALS)
  );

  updateUI();
}

/***********************
 * UPDATE UI
 ***********************/
function updateUI() {
  document.getElementById("balance").innerText = walletBalance.toFixed(2);
  document.getElementById("staked").innerText = staked.toFixed(2);
  document.getElementById("rewards").innerText = rewards.toFixed(4);
}

/***********************
 * STAKE (DEMO)
 ***********************/
function stake() {
  const amt = Number(document.getElementById("stakeAmount").value);

  if (amt <= 0) return alert("Invalid amount");
  if (amt > walletBalance) return alert("Insufficient ZILA balance");

  walletBalance -= amt;
  staked += amt;
  updateUI();
}

/***********************
 * UNSTAKE
 ***********************/
function unstake() {
  walletBalance += staked;
  staked = 0;
  updateUI();
}

/***********************
 * CLAIM (DEMO)
 ***********************/
function claim() {
  rewards += staked * 0.05;
  alert("Rewards claimed");
  updateUI();
}
