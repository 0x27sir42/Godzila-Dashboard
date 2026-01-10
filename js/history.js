function addHistory(type, detail) {
  const data = JSON.parse(localStorage.getItem("zilaHistory")) || [];
  data.unshift({
    type,
    detail,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("zilaHistory", JSON.stringify(data));
}

function renderHistory() {
  const list = document.getElementById("historyList");
  if (!list) return;

  const data = JSON.parse(localStorage.getItem("zilaHistory")) || [];
  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = "<p>No history yet</p>";
    return;
  }

  data.forEach(h => {
    list.innerHTML += `
      <div class="history-item">
        <b>${h.type}</b><br>
        ${h.detail}<br>
        <small>${h.time}</small>
        <hr>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderHistory);
