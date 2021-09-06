import QuartoLayers from "./layers/Quarto.js";

export default class Quarto {
  constructor(canvas) {
    this.context = canvas;
    let tileseQuarto = new Image();
    tileseQuarto.src = "assets/Cenas/Quarto/tilesets/tileset2.png";
    let cama = {
      "1x1": 6,
      "1x2": 7,
      "1x3": 8,
      "2x1": 18,
      "2x2": 19,
      "2x3": 20,
      "3x1": 30,
      "3x2": 31,
      "3x3": 32,
      "4x1": 42,
      "4x2": 43,
      "4x3": 44,
      "5x1": 54,
      "5x2": 55,
      "5x3": 56,
    };
    let tvDesligada = {
      "1x1": 66,
      "1x2": 67,
      "2x1": 78,
      "2x2": 79,
      "3x1": -1,
      "3x2": 91,
    };
    let tvLigada = {
      "1x1": 68,
      "1x2": 69,
      "2x1": 80,
      "2x2": 81,
      "3x1": -1,
      "3x2": 93,
    };

    this.map = {
      tileset: {
        TilePerCol: 12,
        TilePerRow: 12,
        size: 16,
        scale: 4,
      },
      layers: QuartoLayers(cama, tvLigada),
      TileSetImage: tileseQuarto,
    };
    this.colisions = [1]
  }
  update() {}
  draw() {
    DrawMap(this.map, this.context);
  }
}

function DrawMap(mapa, ctx) {
  Object.values(mapa.layers).map((layer) => {
    layer.forEach((linhas, y) => {
      linhas.forEach((coluna, x) => {
        let posLinha =
          ((coluna / mapa.tileset.TilePerCol) | 0) * mapa.tileset.size;
        let posColuna =
          (coluna % mapa.tileset.TilePerRow | 0) * mapa.tileset.size;
        let posX = x * (mapa.tileset.size * mapa.tileset.scale);
        let posY = y * (mapa.tileset.size * mapa.tileset.scale);
        ctx.strokeRect(
          posX,
          posY,
          mapa.tileset.size * mapa.tileset.scale,
          mapa.tileset.size * mapa.tileset.scale
        );
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
  });
}
