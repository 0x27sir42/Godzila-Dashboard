const STAKING_ADDRESS = "0x69862631A0E37dDCc22F3ba5153ca12BB0934B43";
const ZILA_ADDRESS = "0x38Cb68B1EA79fE3F426A404d9f0A46f1857967BF";

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
  if (!signer) return;
  token = new ethers.Contract(ZILA_ADDRESS, ERC20_ABI, signer);
  staking = new ethers.Contract(STAKING_ADDRESS, STAKING_ABI, signer);
}

async function stakeZila() {
  await initStaking();

  const amount = document.getElementById("stakeAmount").value;
  const period = document.getElementById("lock").value;

  const apr = period === "90" ? 2 : 10;
  const seconds = period === "90" ? 90*86400 : 365*86400;

  const decimals = await token.decimals();
  const value = ethers.utils.parseUnits(amount, decimals);

  const allowance = await token.allowance(currentAccount, STAKING_ADDRESS);
  if (allowance.lt(value)) {
    await (await token.approve(STAKING_ADDRESS, value)).wait();
  }

  await (await staking.stake(value, seconds, apr)).wait();
  alert("Staking success");
}

async function claimStaking() {
  await initStaking();
  await (await staking.claim()).wait();
  alert("Rewards claimed");
}
