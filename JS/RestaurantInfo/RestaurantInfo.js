"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantInfo = void 0;
const Restaurant_1 = require("../RestaurantManagement/Restaurant");
class RestaurantInfo extends Restaurant_1.Restaurant {
    constructor(name, address) {
        super(name);
        this.address = address;
        this.foods = [];
        this.tables = [];
    }
    addFood(food) {
        this.foods.push(food);
    }
    setTable(table) {
        this.tables.push(table);
    }
    getFood() {
        return this.foods;
    }
    getTable() {
        return this.tables;
    }
    getAddress() {
        return this.address;
    }
}
exports.RestaurantInfo = RestaurantInfo;
