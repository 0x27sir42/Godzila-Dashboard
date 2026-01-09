const images = [
  "assets/img/eco1.jpg",
  "assets/img/eco2.jpg",
  "assets/img/eco3.jpg",
  "assets/img/eco4.jpg"
];

let index = 0;

function next() {
  index = (index + 1) % images.length;
  document.getElementById("eco").src = images[index];
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("eco").src = images[index];
}
