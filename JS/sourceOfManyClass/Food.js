"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = exports.Foods = void 0;
var Foods;
(function (Foods) {
    Foods["KOKO"] = "koko";
    Foods["MAJU"] = "maju";
    Foods["FRYVEGETABLE"] = "fryvegetable";
})(Foods = exports.Foods || (exports.Foods = {}));
class Food {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Food = Food;
