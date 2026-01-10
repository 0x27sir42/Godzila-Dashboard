const ZILA_TOKEN = "0xE54c126BfE1cdA9A347F2a35DFAc5a9ca155f9A9";
const STAKING_CONTRACT = "PASTE_ALAMAT_STAKING_KAMU";

const ERC20_ABI = [
  "function approve(address,uint) returns(bool)"
];

const STAKING_ABI = [
  "function stake(uint,uint)",
  "function claim()"
];

async function stakeZila() {
  if (!account) return alert("Connect wallet first");

  const amount = document.getElementById("stakeAmount").value;
  const lock = document.getElementById("lockPeriod").value;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const token = new ethers.Contract(ZILA_TOKEN, ERC20_ABI, signer);
  const staking = new ethers.Contract(STAKING_CONTRACT, STAKING_ABI, signer);

  const wei = ethers.utils.parseUnits(amount, 18);

  await token.approve(STAKING_CONTRACT, wei);
  await staking.stake(wei, lock);

  addHistory("Staking", `Staked ${amount} ZILA for ${lock} months`);
  alert("Staking successful");
  renderHistory();
}

async function claimZila() {
  if (!account) return alert("Connect wallet first");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const staking = new ethers.Contract(STAKING_CONTRACT, STAKING_ABI, signer);

  await staking.claim();

  addHistory("Claim", "Rewards claimed");
  alert("Rewards claimed");
  renderHistory();
}
