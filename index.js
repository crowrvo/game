import GameManager from "./GameEngine/GameManager.js";
import SceneManager from "./GameEngine/SceneMannager.js";

const MyGame = new GameManager();
const Quarto = new SceneManager("game");

MyGame.load(Quarto);