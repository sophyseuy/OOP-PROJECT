"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Onlinecustomers = void 0;
const Customers_1 = require("../Customers/Customers");
class Onlinecustomers extends Customers_1.Customers {
    constructor(name, gender, address, food) {
        super(name, gender);
    }
}
exports.Onlinecustomers = Onlinecustomers;
