import GameManager from "./GameManager.js";

export default class SceneManager {
  constructor(canvas) {
    this.canvas = document.getElementById(canvas)
    this.canvas.Width = 800;
    this.canvas.Height = 600;
    this.context = this.canvas.getContext("2d");
    this.PlayerSpeed = 3;
    this.p = new PlayerComponent(30, 30, "blue", 10, 120, this.context);
    window.addEventListener('keydown', (e) => {
      this.key = e.key;
    })
    window.addEventListener('keyup', (e) => {
      this.key = false;
    });
    this.update = function () {
      this.clear();
      let controls = checkControl[this.key] ? checkControl[this.key] : false;
      this.p.speedX = 0;
      this.p.speedY = 0;
      if (controls) this.p[controls[0]] = this.PlayerSpeed * controls[1]
      this.p.move();
      this.p.update();
    };
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function PlayerComponent(width, height, color, x, y, scene) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.context = scene
  this.update = function () {
    this.context.fillStyle = color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }
  this.move = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

const checkControl = {
  a: ['speedX', -1],
  d: ['speedX', 1],
  s: ['speedY', 1],
  w: ['speedY', -1]
}