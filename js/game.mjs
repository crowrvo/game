import PlayerComponent from "./player.mjs"
import GameScene from "./scene.mjs"
import {
    checkControl
} from "./controls.mjs"

let Player
let Game = GameScene;

function start() {
    Player = new PlayerComponent(30, 30, "red", 10, 120, GameScene);
    Game.start();
}

let PlayerSpeed = 3;
export function update() {
    Game.clear();
    let controls = checkControl[Game.key] ?? false;
    Player.speedX = 0;
    Player.speedY = 0;
    if (controls) Player[controls[0]] = PlayerSpeed * controls[1]
    Player.move();
    Player.update();
}

window.onload = start();