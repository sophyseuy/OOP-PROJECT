"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
class Schedule {
    constructor(dayWork, dayOff, time) {
        this.dayWork = dayWork;
        this.dayOff = dayOff;
        this.time = time;
    }
    getDayWork() {
        return this.dayWork;
    }
    getDayOff() {
        return this.dayOff;
    }
    getTime() {
        return this.time;
    }
}
exports.Schedule = Schedule;
