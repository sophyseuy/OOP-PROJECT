"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OnlineCus_1 = require("./CustomerManagement/OnlineCus");
const Manager_1 = require("./RestaurantManager/Manager");
const MonthlyPayment_1 = require("./RestaurantManager/MonthlyPayment");
const StaffList_1 = require("./StaffManagement/StaffList");
const Address_1 = require("./sourceOfManyClass/Address");
const Schedule_1 = require("./StaffManagement/Schedule");
const Food_1 = require("./sourceOfManyClass/Food");
const CustomerList_1 = require("./CustomerManagement/CustomerList");
const Positionn_1 = require("./StaffManagement/Positionn");
const RestaurantMS_1 = require("./RestaurantManagement/RestaurantMS");
const Table_1 = require("./RestaurantInfo/Table");
const RestaurantInfo_1 = require("./RestaurantInfo/RestaurantInfo");
const Gender_1 = require("./sourceOfManyClass/Gender");
// ======================================== Set schedule =================================================
let soyuSchedule = new Schedule_1.Schedule('7:am-8pm');
soyuSchedule.setDayWork([Schedule_1.Weeks.MONDAY, Schedule_1.Weeks.THURSDAY, Schedule_1.Weeks.WEDNESDAY, Schedule_1.Weeks.THURSDAY, Schedule_1.Weeks.FRIDAY]);
let yeyeSchedule = new Schedule_1.Schedule('7:am-8pm');
yeyeSchedule.setDayWork([Schedule_1.Weeks.MONDAY, Schedule_1.Weeks.THURSDAY, Schedule_1.Weeks.WEDNESDAY, Schedule_1.Weeks.THURSDAY, Schedule_1.Weeks.FRIDAY]);
// ======================================== Set Staff address ============================================
let soyuAddress = new Address_1.Address('Phnom Penh', '#ST2002', 13222444, 'No5');
let yeyeAddress = new Address_1.Address('Phnom Penh', '#ST371', 25302444, 'No02');
// ======================================== Customers Address ============================================
// Sreykea Address
let sreykeaAddress = new Address_1.Address('Phnom Penh', '#ST230', 97252484, 'No47D');
// Mey Address
let meyAddress = new Address_1.Address('Phnom Penh', '#ST28', 85894545, 'No48A');
// Add foods
//Sreykea Foodsc
let sreykeaFoodKoko = new Food_1.Food(Food_1.Foods.KOKO, 5);
let sreykeaFoodFryVeg = new Food_1.Food(Food_1.Foods.FRYVEGETABLE, 3);
//Mey Foods
let meyFoodFryEgg = new Food_1.Food(Food_1.Foods.FRYEGG, 2);
let meyFoodMaju = new Food_1.Food(Food_1.Foods.MAJU, 3);
// set staff info
// let soyuWaiter = new Staff('soyu', Gender.Female, 19,300,'002724999',soyuAddress,soyuSchedule,Position.WAITER);
// let yeyeClerk = new Clerk('yeye', Gender.Male, 23,300,'002744990',yeyeAddress,yeyeSchedule,Position.CLERK);
//get and add in staffList class
let staffList = new StaffList_1.StaffList();
// staffList.addWaiter(soyuWaiter);
// staffList.addClerk(yeyeClerk);
// ========================================== MonthPayment ==========================================
let januaryPayment = new MonthlyPayment_1.MonthPayment('January', 300, 50, 1000);
let februaryPayment = new MonthlyPayment_1.MonthPayment('February', 200, 20, 700);
// ============================================ Manager =============================================
let managerAddress = new Address_1.Address('Phnom Penh', '#ST371', 12335566, 'No47D');
let managerSchedult = new Schedule_1.Schedule('7:am-8pm');
managerSchedult.setDayWork([Schedule_1.Weeks.MONDAY]);
let manager = new Manager_1.Manager('sp', 22, Gender_1.Gender.FEMALE, Positionn_1.Position.MANAGER);
manager.addMonthPayment(januaryPayment);
manager.addMonthPayment(februaryPayment);
// console.log(manager.getStaffList());
// console.log(manager);
//========================================== Add Customer ===========================================
// Cus Sreykea
let sreykeaOnlineCus = new OnlineCus_1.Onlinecustomers('sreykea', 22, Gender_1.Gender.FEMALE, Positionn_1.Position.ONLINECUS, sreykeaAddress);
sreykeaOnlineCus.addFood(sreykeaFoodKoko);
sreykeaOnlineCus.addFood(sreykeaFoodFryVeg);
// Cus Mey
let meyOnlineCus = new OnlineCus_1.Onlinecustomers('mey', 20, Gender_1.Gender.FEMALE, Positionn_1.Position.ONLINECUS, meyAddress);
meyOnlineCus.addFood(meyFoodFryEgg);
meyOnlineCus.addFood(meyFoodMaju);
// console.log(onlinecustomers);
// OutlineCustomers----------------------
// let table = new Table(1,2);
// let sreyKea = new OutLineCustomers("Sreykea Reun",Gender.FEMALE,table);
// let maju = new Food(Foods.MAJU, 2);
// sreyKea.addFood(maju);
// console.log(sreyKea);
// ========================================== Customers Class ===========================================
let customersList = new CustomerList_1.CustomerList();
customersList.addOnlineCus(sreykeaOnlineCus);
customersList.addOnlineCus(meyOnlineCus);
// customersList.addOutlineCus(sreyKea);
//
let phnomPenh = new Address_1.Address("Phnom Penh", "str 2004", 12495969, "houseNo49");
let vegetables = new Food_1.Food(Food_1.Foods.FRYVEGETABLE, 1);
let soup = new Food_1.Food(Food_1.Foods.KHMERSUOP, 5);
let table1 = new Table_1.Table(1, 4);
let table2 = new Table_1.Table(2, 5);
// ==========================================  restaurantInfo ===========================================
let restaurantInfo = new RestaurantInfo_1.RestaurantInfo("SP_Restaurant", phnomPenh);
restaurantInfo.addFood(vegetables);
restaurantInfo.addFood(soup);
restaurantInfo.setTable(table1);
restaurantInfo.setTable(table2);
// console.log(restaurantInfo);
console.log(customersList);
// ========================================= RMS =====================================================
let restaurantMS = new RestaurantMS_1.RestaurantMS('Restaurant Management System', restaurantInfo);
restaurantMS.addStaffList(staffList);
restaurantMS.addCusList(customersList);
// console.log(restaurantMS);
