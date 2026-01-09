const images = [
  "assets/img/eco1.jpg",
  "assets/img/eco2.jpg",
  "assets/img/eco3.jpg",
  "assets/img/eco4.jpg"
];

let index = 0;
const img = document.getElementById("ecoImage");

function nextEco() {
  index = (index + 1) % images.length;
  rotate();
}

function prevEco() {
  index = (index - 1 + images.length) % images.length;
  rotate();
}

function rotate() {
  img.style.transform = "rotateY(90deg)";
  setTimeout(() => {
    img.src = images[index];
    img.style.transform = "rotateY(0deg)";
  }, 300);
}
