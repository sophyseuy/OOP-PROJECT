"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
const Person_1 = require("./Person");
class Staff extends Person_1.Person {
    constructor(fullName, age, gender, position, salary, abaNumber, address, schedule) {
        super(fullName, age, gender, position);
        this.salary = salary;
        this.abaNumber = abaNumber;
        this.address = address;
        this.schedule = schedule;
    }
    getFullName() {
        return this.fullName;
    }
    getAge() {
        return this.age;
    }
    getGender() {
        return this.gender;
    }
    getSalary() {
        return this.salary;
    }
    getAbaNumber() {
        return this.abaNumber;
    }
    getAddress() {
        return this.address;
    }
    getSchedule() {
        return this.schedule;
    }
    getPosition() {
        return this.position;
    }
}
exports.Staff = Staff;
