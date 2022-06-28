"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customers_1 = require("./Customers/Customers");
const Manager_1 = require("./Manager/Manager");
const MonthlyPayment_1 = require("./Manager/MonthlyPayment");
const StaffList_1 = require("./Manager/StaffList");
const Address_1 = require("./sourceOfManyClass/Address");
const Schedule_1 = require("./Staff/Schedule");
const Staff_1 = require("./Staff/Staff");
//Set schedule
let soyuSchedule = new Schedule_1.Schedule('Mon-Fri', 'Sat-Sun', '7:am-8pm');
// Set address
let soyuAddress = new Address_1.Address('Phnom Penh', '#ST2002', 13222444, 'No5');
// set staff info
let soyu = new Staff_1.Staff('soyu', Customers_1.Gender.Female, 19, 300, '002724999', soyuAddress, soyuSchedule);
//get and add in staffList class
let staffList = new StaffList_1.StaffList();
staffList.addStaff(soyu);
// MonthPayment
let januaryPayment = new MonthlyPayment_1.MonthPayment('january', 300, 50, 1000);
//Manager
let manager = new Manager_1.Manager('sp');
manager.addMonthPayment(januaryPayment);
manager.addStaffList(staffList);
console.log(manager);
