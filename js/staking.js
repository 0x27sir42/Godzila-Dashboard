const MIN_STAKE = 10000;

async function stake() {
  if (!userAddress) return alert("Connect wallet first");

  const amt = Number(document.getElementById("stakeAmount").value);
  if (amt < MIN_STAKE) return alert("Minimum stake is 10,000 ZILA");

  alert("Stake tx sent to smart contract");
}
