"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Person_1 = require("../StaffManagement/Person");
class Manager extends Person_1.Person {
    constructor(name, age, gender, position) {
        super(name, age, gender, position);
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
