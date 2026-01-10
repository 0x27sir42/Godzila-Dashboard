const PRESALE_ADDRESS = "0x24CD5fc39Fa409C75f14eB9f2FE25f9cbb324Ffb";
const RATE = 1560;

const PRESALE_ABI = [
  "function buy() payable",
  "function claim()"
];

let presale;

function calcZila() {
  const pol = document.getElementById("polAmount").value || 0;
  document.getElementById("zilaAmount").innerText = pol * RATE;
}

async function initPresale() {
  if (!signer) return;
  presale = new ethers.Contract(PRESALE_ADDRESS, PRESALE_ABI, signer);
}

async function buyZila() {
  await initPresale();
  const pol = document.getElementById("polAmount").value;
  const tx = await presale.buy({
    value: ethers.utils.parseEther(pol)
  });
  await tx.wait();
  alert("Presale success");
}

async function claimPresale() {
  await initPresale();
  await (await presale.claim()).wait();
  alert("Presale claimed");
}
