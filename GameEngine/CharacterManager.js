export default class CharacterManager { 
    constructor(width, height, x,y, speed, scene) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.CharacterSpeed = speed;
        this.speedX = 0;
        this.speedY = 0;
        this.context = scene
    }
}