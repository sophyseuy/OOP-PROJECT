"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waiter = void 0;
const Staff_1 = require("./Staff");
class Waiter extends Staff_1.Staff {
    constructor(name, gender, age, salary, abaNumber, address, schedule, position) {
        super(name, gender, age, salary, abaNumber, address, schedule, position);
    }
}
exports.Waiter = Waiter;
