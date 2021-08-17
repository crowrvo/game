import { update } from "../../game.mjs";
import ground from './layers/00_ground.json' assert { type: "json" };
import montanhas from './layers/01_montanha.json' assert { type: "json" };
 

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


//* {tilesetImage.src} = Conduz a imagem que você vai irá utilizar para adicionar partes delas dentro do cenário;
var tilesetImage = new Image();
tilesetImage.src = '../../assets/tileset.png';
tilesetImage.onload = drawImage;
//? {canvas} = Adicionando o nosso mapa ao cenário; {ctx} = Transformando em 2D;
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
//? {tamanho} = Definindo a dimensão da imagem, nesse caso 32x32; {imageNumTiles};   
var tamanho = 32;
var imageNumTiles = 16;
var layers = {};

//! Partes do cenário; 
layers['ground'] = ground
layers['montanha'] = montanhas


/*
? function dawnImage; responsável por posicionar e organizar o mapa;
* primeiro map retornará partes dos nossos cenários, e em seguida montará a partir do eixo y; 
* segundo montará as colunas a partir do eixo x + y, sendo assim completando e formando o mapa;
*/


function drawImage() {
    Object.values(layers).map((layer) => {
        layer.map((linha, y) => {
            linha.map((coluna, x) => {
                //? {posLinha} recebe o valor somado de [coluna, imageNumTiles, tamanho] para pegar a posição na linha;
                let posLinha = ((coluna / imageNumTiles) | 0) * tamanho; 
                //? {posColuna} recebe o valor somado de [coluna, imageNumTiles, tamanho] para pegar a posição na coluna;
                let posColuna = ((coluna % imageNumTiles) | 0) * tamanho;
                //* [posX, posY] são responsáveis por calcular as posições x e y;
                let posX = x * tamanho
                let posY = y * tamanho
                ctx.drawImage(tilesetImage, posColuna, posLinha, tamanho, tamanho, posX, posY, tamanho, tamanho);
            })
        })
    })
}


export default GameScene