"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantInfo = void 0;
const Restaurant_1 = require("../Restaurant");
const Address_1 = require("../sourceOfManyClass/Address");
const Food_1 = require("./Food");
const Table_1 = require("./Table");
class RestaurantInfo extends Restaurant_1.Restaurant {
    constructor(name, address) {
        super(name);
        this.address = address;
        this.food = [];
        this.table = [];
    }
    ;
    addFood(food) {
        this.food.push(food);
    }
    setTable(table) {
        this.table.push(table);
    }
}
exports.RestaurantInfo = RestaurantInfo;
let phnomPenh = new Address_1.Address("Phnom Penh", "str 2004", 0889495969, "houseNo49");
let vegetables = new Food_1.Food('fry vegetables', 1);
let soup = new Food_1.Food('khmer soup', 5);
let table1 = new Table_1.Table(1, 1);
let table2 = new Table_1.Table(2, 2);
let restaurantInfo = new RestaurantInfo('SP_Restaurant', phnomPenh);
restaurantInfo.addFood(vegetables);
restaurantInfo.addFood(soup);
restaurantInfo.setTable(table1);
restaurantInfo.setTable(table2);
console.log(restaurantInfo);
