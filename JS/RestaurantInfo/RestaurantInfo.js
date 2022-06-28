"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantInfo = void 0;
const Restaurant_1 = require("../RMS/Restaurant");
const Address_1 = require("../sourceOfManyClass/Address");
const Table_1 = require("./Table");
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
}
exports.RestaurantInfo = RestaurantInfo;
let phnomPenh = new Address_1.Address("Phnom Penh", "str 2004", 12495969, "houseNo49");
// let vegetables = new Food("fry vegetables", 1);
// let soup = new Food("khmer soup", 5);
// let table1 = new Table(1, 4);
let table2 = new Table_1.Table(2, 5);
let restaurantInfo = new RestaurantInfo("SP_Restaurant", phnomPenh);
// restaurantInfo.addFood(vegetables);
// restaurantInfo.addFood(soup);
// restaurantInfo.setTable(table1);
restaurantInfo.setTable(table2);
console.log(restaurantInfo);
