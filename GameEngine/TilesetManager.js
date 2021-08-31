export function DrawMap(mapa, ctx) {
  Object.values(mapa.layers).map((layer) => {
    layer.map((linhas, y) => {
      linhas.map((coluna, x) => {
        let posLinha = ((coluna / mapa.tileset.TilePerCol) | 0) * mapa.tileset.size;
        let posColuna = (coluna % mapa.tileset.TilePerRow | 0) * mapa.tileset.size;
        // console.log(posLinha);
        let posX = x * (mapa.tileset.size * mapa.tileset.scale);
        let posY = y * (mapa.tileset.size * mapa.tileset.scale);
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
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