import SceneManager from "../../../GameEngine/SceneManager.js";
import { DrawMap } from "../../../GameEngine/TilesetManager.js";
import QuartoLayers from "./layers/Quarto.js";

export default class Quarto extends SceneManager {
    constructor(canvas) {
        super(canvas)
        this.instances = [];
        let img = new Image();
        img.src = "assets/Cenas/Quarto/tilesets/tileset2.png";
        let cama = {
            "1x1": 6, "1x2": 7, "1x3": 8,
            "2x1": 18, "2x2": 19, "2x3": 20,
            "3x1": 30, "3x2": 31, "3x3": 32,
            "4x1": 42, "4x2": 43, "4x3": 44,
            "5x1": 54, "5x2": 55, "5x3": 56
        }
        let tvDesligada = {
            "1x1": 66, "1x2": 67,
            "2x1": 78, "2x2": 79,
            "3x1": -1, "3x2": 91,
        }
        let tvLigada = {}
        Object.entries(tvDesligada).map(([key, value]) => {
            Object.assign(tvLigada, { [key]: (value > 0 ? value + 2 : -1) })
        });

        this.map = {
            tileset: {
                TilePerCol: 12,
                TilePerRow: 12,
                size: 16,
                scale: 4
            },
            layers: QuartoLayers(cama, tvDesligada),
            TileSetImage: img
        }
        this.keys = []
        addEventListener("keydown", (e) => {
            if (!this.keys.includes(e.key)) this.keys.unshift(e.key);
        })
        addEventListener("keyup", (e) => {
            this.keys = this.keys.filter(key => key !== e.key);
        })
        this.controls = true
        this.acceptableKey = {
            a: ['speedX', -1],
            d: ['speedX', 1],
            s: ['speedY', 1],
            w: ['speedY', -1]
        }
    }
    update() {
        this.clear()
        DrawMap(this.map, this.context);
        this.instances.map(x => x(this));

    }
    load(instance) {
        this.instances.push(instance.update.bind(instance));
    }
}