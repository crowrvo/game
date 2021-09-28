const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
canvas.width = 832;
canvas.height = 832;

//!ANCHOR CLASSES

//?ANCHOR PLAYER
class PlayerBia {
  constructor(width, height, x, y, scale, speed) {
    this.width = width;
    this.height = height;
    this.spriteWidth = 19;
    this.spriteheight = 33;
    this.x = x;
    this.y = y;
    this.gridX = x + width / 2;
    this.gridY = y + height / 2;
    this.oldX = x;
    this.oldY = y;
    this.scale = scale;
    this.CharacterSpeed = speed;
    this.spriteSetBia = new Image();
    this.spriteSetBia.src =
      "assets/Personagens/Bia/spritesets/spriteset_bia.png";
    this.direction = 0;
    this.frame = 0;
    this.maxFrame = 2;
    this.timeToFrame = 0;
    this.frameRate = 200;
    this.keys = [];
    this.acceptableKey = {
      KeyA: ["speedX", -1, 3],
      KeyD: ["speedX", 1, 2],
      KeyS: ["speedY", 1, 0],
      KeyW: ["speedY", -1, 1],
      ArrowLeft: ["speedX", -1, 3],
      ArrowRight: ["speedX", 1, 2],
      ArrowDown: ["speedY", 1, 0],
      ArrowUp: ["speedY", -1, 1],
    };
    this.colisions = {
      0: () => {
        // BAIXO
        if (
          this.y + this.height * this.scale > this.canvas.height || //PAREDE - CANVAS
          (this.gridX >= 1 && this.gridX <= 4 && this.gridY == 7) || // CAMA
          (this.y >= 270 && this.y <= 275 && this.x >= 350 && this.x <= 475) || // SNORLAX
          (this.x >= 615 && this.x <= 640 && this.y >= 260 && this.y <= 270) || // TV
          (this.y >= 595 && this.y <= 600 && this.x >= 595 && this.x <= 710)
        )
          return (this.speedY = 0);
      },
      1: () => {
        // CIMA
        if (
          this.gridY == 4 || //PAREDE
          (this.gridX >= 1 && this.gridX <= 4 && this.gridY == 11) || // CAMA
          (this.y >= 385 && this.y <= 390 && this.x >= 350 && this.x <= 475) || // SNORLAX
          (this.y <= 545 && this.y >= 540 && this.x >= 620 && this.x <= 710) // TV
        )
          return (this.speedY = 0);
      },
      2: () => {
        // DIREITA
        if (
          this.gridX == 12 || //PAREDE
          (this.gridY >= 4 && this.gridY <= 5 && this.gridX == 11) || // CAMA
          (this.x >= 615 && this.x <= 620 && this.y >= 260 && this.y <= 550) || // TV
          (this.x >= 350 && this.x <= 355 && this.y >= 275 && this.y <= 390) || // SNORLAX
          (this.y >= 600 && this.y <= 710 && this.x >= 595 && this.x <= 600) // VENTILADOR
        )
          return (this.speedX = 0);
      },
      3: () => {
        // ESQUERDA
        if (
          this.gridX == 1 || //PAREDE
          (this.gridX == 4 && this.gridY >= 7 && this.gridY <= 11) || // CAMA
          (this.x >= 480 && this.x <= 485 && this.y >= 275 && this.y <= 390) // SNORLAX
        )
          return (this.speedX = 0);
      },
    };

    addEventListener("keydown", (e) => {
      if (this.acceptableKey[e.code] != undefined)
        if (!this.keys.includes(e.code)) this.keys.unshift(e.code);
    });
    addEventListener("keyup", (e) => {
      this.keys = this.keys.filter((key) => key !== e.code);
    });
  }
  update(deltaTime) {
    this.move(deltaTime, this.acceptableKey[this.keys[0]] ?? false);
  }
  draw() {
    this.context.fillStyle = "blue";
    this.context.drawImage(
      this.spriteSetBia,
      this.frame * this.spriteWidth,
      this.direction * this.spriteheight,
      this.spriteWidth,
      this.spriteheight,
      this.x,
      this.y,
      this.width * this.scale,
      this.height * this.scale
    );
    let posX = ((this.x + this.width * this.scale) / (16 * 4)) | 0;
    let posY = ((this.y + this.height * this.scale - 40) / (16 * 4)) | 0;
    this.context.font = "30px Arial";
    this.context.fillText(`Pos: X: ${posX} | Y: ${posY}`, 64, 64);
    this.context.fillText(
      `Absolute Pos: X: ${this.x} | Y: ${this.y}`,
      128,
      128
    );
    // this.context.strokeRect(
    //   this.x,
    //   this.y,
    //   this.width * this.scale,
    //   this.height * this.scale
    // );
    // this.context.fillRect(
    //   this.x,
    //   this.y + this.height * this.scale - 40,
    //   this.width * this.scale,
    //   40
    // );
  }
  move(deltaTime, dir) {
    if (!dir) return (this.frame = 0);
    this.direction = dir[2];
    this.timeToFrame += deltaTime;
    if (this.timeToFrame > this.frameRate) {
      if (this.frame > this.maxFrame) this.frame = 0;
      else this.frame++;
      this.timeToFrame = 0;
    }

    this.speedX = 0;
    this.speedY = 0;
    this[dir[0]] = this.CharacterSpeed * dir[1];
    this.oldX = this.x;
    this.oldY = this.y;
    this.colisions[this.direction]();
    this.x += this.speedX;
    this.y += this.speedY;
    this.gridX = ((this.x + this.width * this.scale) / (16 * 4)) | 0;
    this.gridY = ((this.y + this.height * this.scale - 40) / (16 * 4)) | 0;
  }
}

class Menu {
  constructor() {}
  update() {}
  draw() {}
}

let lastTime = 0;
let layer0 = [];
let layer1 = [];
let layer2 = [];
let layer3 = [];
context.mozImageSmoothingEnabled = false;
context.webkitImageSmoothingEnabled = false;
context.msImageSmoothingEnabled = false;
context.imageSmoothingEnabled = false;
async function update(timestamp) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  let deltaTime = 0;
  deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  [...layer0, ...layer1, ...layer2, ...layer3].forEach((x) =>
    x.update(deltaTime)
  );
  [...layer0, ...layer1, ...layer2, ...layer3].forEach((x) =>
    x.draw(deltaTime)
  );
  requestAnimationFrame(update);
}
update(0);

// const bia = new PlayerBia(16, 33, 256, 390, 4, 3);

// ANCHOR MAPA
function DrawMap(mapa, ctx) {
  layer.forEach((linhas, y) => {
    linhas.forEach((coluna, x) => {
      let posLinha =
        ((coluna / mapa.tileset.TilePerCol) | 0) * mapa.tileset.size;
      let posColuna =
        (coluna % mapa.tileset.TilePerRow | 0) * mapa.tileset.size;
      let posX = x * (mapa.tileset.size * mapa.tileset.scale);
      let posY = y * (mapa.tileset.size * mapa.tileset.scale);
      ctx.drawImage(
        mapa.TileSetImage,
        posColuna,
        posLinha,
        mapa.tileset.size,
        mapa.tileset.size,
        posX,
        posY,
        mapa.tileset.size * mapa.tileset.scale,
        mapa.tileset.size * mapa.tileset.scale
      );
    });
  });
}
