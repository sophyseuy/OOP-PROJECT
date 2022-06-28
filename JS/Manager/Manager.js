"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Restaurant_1 = require("../Restaurant");
class Manager extends Restaurant_1.Restaurant {
    constructor(name) {
        super(name);
        this.monthPayment = [];
        this.staffList = [];
    }
    addMonthPayment(param) {
        this.monthPayment.push(param);
    }
    addStaffList(param) {
        this.staffList.push(param);
    }
}
exports.Manager = Manager;
