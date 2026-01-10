const STAKING_ADDRESS = "0x69862631A0E37dDCc22F3ba5153ca12BB0934B43";
const ZILA_ADDRESS = "0x38Cb68B1EA79fE3F426A404d9f0A46f1857967BF";

const MIN_STAKE = 10000; // 10,000 ZILA

const ERC20_ABI = [
  "function approve(address,uint256)",
  "function allowance(address,address)view returns(uint256)",
  "function decimals()view returns(uint8)"
];

const STAKING_ABI = [
  "function stake(uint256,uint256,uint256)",
  "function claim()"
];

let token, staking;

async function initStaking() {
  if (!signer) {
    alert("Please connect wallet first");
    return;
  }
  token = new ethers.Contract(ZILA_ADDRESS, ERC20_ABI, signer);
  staking = new ethers.Contract(STAKING_ADDRESS, STAKING_ABI, signer);
}

async function stakeZila() {
  await initStaking();

  const amount = Number(document.getElementById("stakeAmount").value);
  if (!amount || amount < MIN_STAKE) {
    alert("Minimum staking amount is 10,000 ZILA");
    return;
  }

  const lock = document.getElementById("lock").value;
  const apr = lock === "90" ? 2 : 10;
  const duration = lock === "90" ? 90 * 86400 : 365 * 86400;

  const decimals = await token.decimals();
  const value = ethers.utils.parseUnits(amount.toString(), decimals);

  const allowance = await token.allowance(currentAccount, STAKING_ADDRESS);
  if (allowance.lt(value)) {
    const approveTx = await token.approve(STAKING_ADDRESS, value);
    await approveTx.wait();
  }

  const tx = await staking.stake(value, duration, apr);
  await tx.wait();

  alert("Staking successful");
}

async function claimStaking() {
  await initStaking();
  const tx = await staking.claim();
  await tx.wait();
  alert("Rewards claimed");
}
