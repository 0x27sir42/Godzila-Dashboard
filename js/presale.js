const PRESALE_ADDRESS = "0x24CD5fc39Fa409C75f14eB9f2FE25f9cbb324Ffb";
const RATE = 1560;
const MIN_BUY = 10; // 10 POL minimum

const PRESALE_ABI = [
  "function buy() payable",
  "function claim()"
];

let presale;

function calcZila() {
  const pol = Number(document.getElementById("polAmount").value || 0);
  document.getElementById("zilaAmount").innerText = pol * RATE;
}

async function initPresale() {
  if (!signer) {
    alert("Please connect wallet first");
    return;
  }
  presale = new ethers.Contract(PRESALE_ADDRESS, PRESALE_ABI, signer);
}

async function buyZila() {
  await initPresale();

  const pol = Number(document.getElementById("polAmount").value);
  if (!pol || pol < MIN_BUY) {
    alert("Minimum purchase is 10 POL");
    return;
  }

  const tx = await presale.buy({
    value: ethers.utils.parseEther(pol.toString())
  });

  await tx.wait();
  alert("Presale purchase successful");
}

async function claimPresale() {
  await initPresale();
  const tx = await presale.claim();
  await tx.wait();
  alert("Presale claimed");
}
