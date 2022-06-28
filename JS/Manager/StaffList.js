"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffList = void 0;
class StaffList {
    constructor() {
        this.staffList = [];
    }
    addStaff(staff) {
        this.staffList.push(staff);
    }
    getStaffList() {
        return this.staffList;
    }
}
exports.StaffList = StaffList;
