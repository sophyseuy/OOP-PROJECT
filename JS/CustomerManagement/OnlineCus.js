"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Onlinecustomers = void 0;
const Person_1 = require("../StaffManagement/Person");
class Onlinecustomers extends Person_1.Person {
    constructor(name, age, gender, position, address) {
        super(name, age, gender, position);
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
