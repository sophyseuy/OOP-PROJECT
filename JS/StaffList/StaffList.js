"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffList = void 0;
class StaffList {
    constructor() {
        // private staffList:Waiter[]|Clerk[]=[];
        this.waiter = [];
        this.clerk = [];
    }
    addWaiter(waiter) {
        this.waiter.push(waiter);
    }
    addClerk(clerk) {
        this.clerk.push(clerk);
    }
}
exports.StaffList = StaffList;
