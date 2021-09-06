import PlayerBia from "./assets/Personagens/Bia/index.js";
import Quarto from "./assets/Cenas/Quarto/index.js";
const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
canvas.width = 832;
canvas.height = 832;

let lastTime = 0;
let entidades = [];
context.mozImageSmoothingEnabled = false;
context.webkitImageSmoothingEnabled = false;
context.msImageSmoothingEnabled = false;
context.imageSmoothingEnabled = false;
async function update(timestamp) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  let deltaTime = 0;
  deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  [...entidades].forEach((x) => x.update(deltaTime));
  [...entidades].forEach((x) => x.draw(deltaTime));
  requestAnimationFrame(update);
}
update(0);
const quarto = new Quarto(context);
const bia = new PlayerBia(16, 33, 256, 390, 4, 3, canvas, context, quarto);

entidades.push(quarto, bia);
