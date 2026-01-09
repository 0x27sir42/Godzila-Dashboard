let balance = 100000;
let staked = 0;
let rewards = 0;

function updateUI() {
  document.getElementById("balance").innerText = balance;
  document.getElementById("staked").innerText = staked;
  document.getElementById("rewards").innerText = rewards.toFixed(2);
}

function stake() {
  const amt = Number(document.getElementById("stakeAmount").value);
  if (amt <= 0 || amt > balance) return alert("Invalid amount");
  balance -= amt;
  staked += amt;
  updateUI();
}

function unstake() {
  balance += staked;
  staked = 0;
  updateUI();
}

function claim() {
  rewards += staked * 0.05;
  alert("Rewards claimed");
  updateUI();
}

updateUI();
