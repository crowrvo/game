export default class GameManager {
  constructor() {
    this.instances = [];
    this.instances.push(this.update.bind(this));
    this.interval = requestAnimationFrame(this.GameTime.bind(this));
  }
  update() {
    console.log("estou vivo!!")
  }
  async GameTime() {
    this.instances.map(x => x());
    requestAnimationFrame(this.GameTime.bind(this))
  };
  start = function () {};
  load(instance) {
    this.instances.push(instance.update.bind(instance));
  }
}