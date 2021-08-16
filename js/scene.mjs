import {
    update
} from "./game.mjs";

const GameScene = {
    canvas: document.getElementById("game"),
    start: function () {
        this.canvas.Width = 800;
        this.canvas.Height = 600;
        this.context = this.canvas.getContext("2d");
        this.interval = requestAnimationFrame(update)
        window.addEventListener('keydown', function (e) {
            GameScene.key = e.key;
        })
        window.addEventListener('keyup', function (e) {
            GameScene.key = false;
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// BETA AINDA VAI ANALISAR
var tilesetImage = new Image();
tilesetImage.src = '../assets/bedroom-tileset.png';
tilesetImage.onload = drawImage;
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var tileSize = 16;
var rowTileCount = 11;
var colTileCount = 7;
var imageNumTiles = 11;

var ground = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1]
]

function drawImage() {
    for (var r = 0; r < rowTileCount; r++) {
        for (var c = 0; c < colTileCount; c++) {
            var tile = ground[r][c];
            var tileRow = (tile / imageNumTiles) | 0;
            var tileCol = (tile % imageNumTiles) | 0;
            ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
        }
    }
}

export default GameScene