"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantMS = void 0;
const Restaurant_1 = require("./Restaurant");
class RestaurantMS extends Restaurant_1.Restaurant {
    constructor() {
        super(...arguments);
        this.staffLists = [];
        this.customerLists = [];
    }
}
exports.RestaurantMS = RestaurantMS;
