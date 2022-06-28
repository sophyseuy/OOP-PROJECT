"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = exports.Gender = void 0;
const Restaurant_1 = require("../Restaurant");
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
class Customers extends Restaurant_1.Restaurant {
    constructor(name, gender) {
        super(name);
    }
}
exports.Customers = Customers;
