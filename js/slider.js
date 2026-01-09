let ecoImages = [
  "assets/img/eco1.jpg",
  "assets/img/eco2.jpg",
  "assets/img/eco3.jpg",
  "assets/img/eco4.jpg"
];

let index = 0;

function nextEco() {
  index = (index + 1) % ecoImages.length;
  document.getElementById("ecoImage").src = ecoImages[index];
}

function prevEco() {
  index = (index - 1 + ecoImages.length) % ecoImages.length;
  document.getElementById("ecoImage").src = ecoImages[index];
}
