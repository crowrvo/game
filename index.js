import Player from "./assets/Personagens/Player/index.js";
import GameManager from "./GameEngine/GameManager.js";
import Quarto from "./assets/Cenas/Quarto/index.js";

const game = new GameManager("game");
const quarto = new Quarto(game.canvas);
const player = new Player(30, 30, 10, 120, 6, quarto.context);

quarto.load(player);
game.load(quarto);