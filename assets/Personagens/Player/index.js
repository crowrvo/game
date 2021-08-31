import CharacterManager from "../../../GameEngine/CharacterManager.js";

export default class Player extends CharacterManager {
  constructor(width, height, x, y, speed, scene) {
    super(width, height, x, y, speed, scene);
  }
  update(Scene) {
    if (Scene.controls) this.move(Scene.acceptableKey[Scene.keys[0]] ?? false)
    this.context.fillStyle = "blue";
    this.context.fillRect(this.x, this.y, this.width, this.height);
  };
  move(dir) {
    if (!dir) return;
    this.speedX = 0;
    this.speedY = 0;
    this[dir[0]] = this.CharacterSpeed * dir[1]
    this.x += this.speedX;
    this.y += this.speedY;
  }
}