"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffList = void 0;
class StaffList {
    constructor() {
        this.shefts = [];
        this.waiter = [];
        this.clerk = [];
        this.receptionist = [];
        this.securityman = [];
    }
    // Add Functions
    addManager(manager) {
        this.manager = manager;
    }
    addShefts(sheft) {
        this.shefts.push(sheft);
    }
    addWaiter(waiter) {
        this.waiter.push(waiter);
    }
    addClerk(clerk) {
        this.clerk.push(clerk);
    }
    addReceptionist(receptionist) {
        this.receptionist.push(receptionist);
    }
    addSecurityman(securityman) {
        this.securityman.push(securityman);
    }
    // Get Functions
    getManager() {
        return this.manager;
    }
    getShefts() {
        return this.shefts;
    }
    getWaiter() {
        return this.waiter;
    }
    getClerk() {
        return this.clerk;
    }
    getReceptionist() {
        return this.receptionist;
    }
    getSecurityman() {
        return this.securityman;
    }
}
exports.StaffList = StaffList;
