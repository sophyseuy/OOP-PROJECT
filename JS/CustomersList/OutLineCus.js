"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutLineCustomers = void 0;
const Customers_1 = require("./Customers");
class OutLineCustomers extends Customers_1.Customers {
    constructor(name, gender, table, foods) {
        super(name);
        this.name = name;
    }
}
exports.OutLineCustomers = OutLineCustomers;
