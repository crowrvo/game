import {
  Mapa
} from "../interfaces/Mapa";

export function DrawMap(mapa, ctx) {
  let TilesetImage = new Image();
  TilesetImage.src = mapa.tileset.ImagePath;
  Object.values(mapa.layers).map((layer) => {
    layer.map((linhas, y) => {
      linhas.map((coluna, x) => {
        let posLinha =
          ((coluna / mapa.tileset.TilePerCol) | 0) * mapa.tileset.size;
        let posColuna =
          (coluna % mapa.tileset.TilePerCol | 0) * mapa.tileset.size;
        let posX = x * mapa.tileset.size;
        let posY = y * mapa.tileset.size;
        ctx.drawImage(
          TilesetImage,
          posColuna,
          posLinha,
          mapa.tileset.size,
          mapa.tileset.size,
          posX,
          posY,
          mapa.tileset.size,
          mapa.tileset.size
        );
      });
    });
  });
}