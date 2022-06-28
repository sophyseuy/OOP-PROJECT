"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Staff_1 = require("../Staff");
class Manager extends Staff_1.Staff {
    constructor(name, gender, age, salary, abaNumber, address, schedule, position) {
        super(name, gender, age, salary, abaNumber, address, schedule, position);
        this.monthPayment = [];
    }
    addMonthPayment(param) {
        this.monthPayment.push(param);
    }
    getMonthPayment() {
        return this.monthPayment;
    }
}
exports.Manager = Manager;
