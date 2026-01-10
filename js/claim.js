const STAKING_ADDRESS = "0x69862631A0E37dDCc22F3ba5153ca12BB0934B43";

const STAKING_ABI = [
  "function claim(uint256)"
];

async function claimRewards() {
  if (!signer) {
    alert("Connect wallet first");
    return;
  }

  try {
    const staking = new ethers.Contract(
      STAKING_ADDRESS,
      STAKING_ABI,
      signer
    );

    const stakeId = 0; // default stake ID

    alert("Confirm claim transaction in wallet");

    const tx = await staking.claim(stakeId);
    await tx.wait();

    alert("Claim successful 🎉");
  } catch (err) {
    console.error(err);
    alert("Claim failed: staking still locked or no rewards");
  }
}
