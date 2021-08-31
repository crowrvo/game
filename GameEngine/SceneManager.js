import GameManager from "./GameManager.js";

export default class SceneManager {
  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext("2d")
    this.controls = true;
    this.elements = [];
    this.keys = [];
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.Width, this.canvas.clientHeight);
  }
}
