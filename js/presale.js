/***********************
 * PRESALE CONFIG
 ***********************/

// 🔴 GANTI DENGAN WALLET POLYGON KAMU (PUBLIC ADDRESS SAJA)
const PRESALE_WALLET = "0x24CD5fc39Fa409C75f14eB9f2FE25f9cbb324Ffb";

// Rate presale
const RATE = 1560; // 1 POL = 1560 ZILA


/***********************
 * CALCULATOR
 ***********************/
document.getElementById("polAmount").addEventListener("input", () => {
  const pol = Number(document.getElementById("polAmount").value);
  document.getElementById("zilaAmount").innerText = pol * RATE;
});


/***********************
 * BUY ZILA
 ***********************/
async function buyZila() {
  if (!currentAccount) {
    alert("Please connect wallet first");
    return;
  }

  const polAmount = Number(document.getElementById("polAmount").value);
  if (polAmount <= 0) {
    alert("Enter POL amount");
    return;
  }

  try {
    const tx = await ethereum.request({
      method: "eth_sendTransaction",
      params: [{
        from: currentAccount,          // wallet USER
        to: 0x24CD5fc39Fa409C75f14eB9f2FE25f9cbb324Ffb,            // 👈 WALLET KAMU
        value: "0x" + (polAmount * 1e18).toString(16)
      }]
    });

    alert("Transaction sent successfully!");
  } catch (error) {
    alert("Transaction rejected");
    console.error(error);
  }
}
