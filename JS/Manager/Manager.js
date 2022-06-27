"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Restaurant_1 = require("../Restaurant");
class Manager extends Restaurant_1.Restaurant {
    constructor(name, income, monthPayment, staffList) {
        super(name);
    }
}
exports.Manager = Manager;
