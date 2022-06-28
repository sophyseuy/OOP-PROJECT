"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Onlinecustomers = void 0;
const Customers_1 = require("./Customers");
class Onlinecustomers extends Customers_1.Customers {
    constructor(name, gender, address) {
        super(name);
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.foods = [];
    }
    addFood(food) {
        this.foods.push(food);
    }
    getCusName() {
        return this.name;
    }
    getGender() {
        return this.gender;
    }
    getCusAddress() {
        return this.address;
    }
    getCusFoods() {
        return this.foods;
    }
}
exports.Onlinecustomers = Onlinecustomers;
