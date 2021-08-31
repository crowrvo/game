export default class GameManager {
  constructor(context) {
    this.canvas = document.getElementById(context)
    this.context = this.canvas.getContext("2d");
    this.canvas.Width = 832;
    this.canvas.Height = 832;
    this.instances = [];
    this.interval = requestAnimationFrame(this.update.bind(this));
  }
  async update() {
    this.instances.map(x => x());
    requestAnimationFrame(this.update.bind(this))

  }
  load(instance) {
    this.instances.push(instance.update.bind(instance));
  }
}