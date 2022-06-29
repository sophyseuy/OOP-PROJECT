"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
class Customers {
    constructor(fullName) {
        this.fullName = fullName;
    }
}
exports.Customers = Customers;
