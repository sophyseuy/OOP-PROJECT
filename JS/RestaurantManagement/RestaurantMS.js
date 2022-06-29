"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantMS = void 0;
const Restaurant_1 = require("./Restaurant");
class RestaurantMS extends Restaurant_1.Restaurant {
    constructor(name, RestaurantInfo) {
        super(name);
        this.RestaurantInfo = RestaurantInfo;
        this.staffLists = [];
        this.customerLists = [];
    }
    addStaffList(staffList) {
        this.staffLists.push(staffList);
    }
    addCusList(cusList) {
        this.customerLists.push(cusList);
    }
    getStaffList() {
        return this.staffLists;
    }
    getCusList() {
        return this.customerLists;
    }
    getRestaurantInfo() {
        return this.RestaurantInfo;
    }
}
exports.RestaurantMS = RestaurantMS;
