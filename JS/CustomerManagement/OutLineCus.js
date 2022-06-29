"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutLineCustomers = void 0;
const Customers_1 = require("./Customers");
class OutLineCustomers extends Customers_1.Customers {
    constructor(fullName, gender, table) {
        super(fullName);
        this.gender = gender;
        this.table = table;
        this.foods = [];
    }
    addFood(food) {
        this.foods.push(food);
    }
    getGender() {
        return this.gender;
    }
    getTable() {
        return this.table;
    }
}
exports.OutLineCustomers = OutLineCustomers;
