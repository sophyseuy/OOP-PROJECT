"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = exports.Weeks = void 0;
var Weeks;
(function (Weeks) {
    Weeks["MONDAY"] = "Monday";
    Weeks["TUESDAY"] = "Tuesday";
    Weeks["WEDNESDAY"] = "Wednesday";
    Weeks["THURSDAY"] = "Thursday";
    Weeks["FRIDAY"] = "Friday";
    Weeks["SATURDAY"] = "Saturday";
    Weeks["SUNDAY"] = "Sunday";
})(Weeks = exports.Weeks || (exports.Weeks = {}));
class Schedule {
    constructor(time) {
        this.time = time;
    }
    setDayWork(day) {
        this.dayWork = this.dayWork.concat(day);
    }
    getDayWork() {
        return this.dayWork;
    }
    getTime() {
        return this.time;
    }
}
exports.Schedule = Schedule;
