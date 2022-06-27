"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectCustomers = void 0;
const Customers_1 = require("./Customers");
class DirectCustomers extends Customers_1.Customers {
    constructor(name, gender, table, foods) {
        super(name, gender);
    }
}
exports.DirectCustomers = DirectCustomers;
