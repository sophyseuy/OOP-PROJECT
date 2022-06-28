"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerList = void 0;
class CustomerList {
    constructor() {
        this.onlineCus = [];
        this.outLineCus = [];
    }
    addOnlineCus(cus) {
        this.onlineCus.push(cus);
    }
    addOutlineCus(cus) {
        this.outLineCus.push(cus);
    }
    getOnlineCus() {
        return this.onlineCus;
    }
    getOutlineCus() {
        return this.outLineCus;
    }
}
exports.CustomerList = CustomerList;
