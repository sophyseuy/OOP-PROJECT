import { Customers} from "./CustomerManagement/Customers";
import { OnlineCustomers, OnlineOrder } from "./CustomerManagement/OnlineCus";
import { Manager } from "./RestaurantManager/Manager";
import { MonthPayment } from "./RestaurantManager/MonthlyPayment";
import {StaffManagement } from "./StaffManagement/StaffManagement";
import { Address } from "./sourceOfManyClass/Address";
import { Schedule, Weeks } from "./StaffManagement/Schedule";
import { Food, Foods } from "./sourceOfManyClass/Food";
import {CustomerManagement } from "./CustomerManagement/CustomerManagement";
import { Position } from "./StaffManagement/Positionn";
import { RestaurantMS } from "./RestaurantManagement/RestaurantMS";
import { Table } from "./RestaurantInfo/Table";
import { RestaurantInfo } from "./RestaurantInfo/RestaurantInfo";
import { OutLineCustomers } from "./CustomerManagement/OutLineCus";
import { Staff } from "./StaffManagement/Staff";
import { Gender } from "./sourceOfManyClass/Gender";
import { Payment, Receipt } from "./sourceOfManyClass/Payment";
// ======================================== Set schedule =================================================
let soyuSchedule = new Schedule('7:am-8pm');
soyuSchedule.setDayWork(Weeks.MONDAY,Weeks.THURSDAY,Weeks.WEDNESDAY,Weeks.THURSDAY,Weeks.FRIDAY);
let yeyeSchedule = new Schedule('7:am-8pm');
yeyeSchedule.setDayWork(Weeks.MONDAY,Weeks.THURSDAY,Weeks.WEDNESDAY,Weeks.THURSDAY,Weeks.FRIDAY)
let aSchedule = new Schedule('7:am-8pm');
aSchedule.setDayWork(Weeks.MONDAY,Weeks.THURSDAY,Weeks.WEDNESDAY,Weeks.THURSDAY,Weeks.FRIDAY)
let bSchedule = new Schedule('7:am-8pm');
bSchedule.setDayWork(Weeks.MONDAY,Weeks.THURSDAY,Weeks.WEDNESDAY,Weeks.THURSDAY,Weeks.FRIDAY)
let cSchedule = new Schedule('7:am-8pm');
cSchedule.setDayWork(Weeks.MONDAY,Weeks.THURSDAY,Weeks.WEDNESDAY,Weeks.THURSDAY,Weeks.FRIDAY)
// ======================================== Set Staf address ============================================
let soyuAddress = new Address('Phnom Penh','#ST2002',13222444,'No5');
let yeyeAddress = new Address('Phnom Penh','#ST371',25302444,'No02');
let aAddress = new Address('Phnom Penh','#ST371',22222222,'No7');
let bAddress = new Address('Phnom Penh','#ST371',333333333,'No07');
let cAddress = new Address('Phnom Penh','#ST371',11111111,'No7');


// ========================================= Staff list ==============================================
let soyuWaiter = new Staff('soyu',19, Gender.FEMALE,Position.WAITER,300,'002724999',soyuAddress,soyuSchedule);
let yeyeClerk = new Staff('yeye',23, Gender.MALE,Position.CLERK,300,'002744990',yeyeAddress,yeyeSchedule);
let aResceptionist = new Staff('yeye',20, Gender.MALE,Position.RECEPTIONIST,300,'002744990',aAddress,aSchedule);
let bSheft = new Staff('yeye',30, Gender.MALE,Position.SHEFT,500,'002744990',bAddress,bSchedule);
let cSecurityman = new Staff('yeye',23, Gender.MALE,Position.SECURITYMAN,250,'002744990',cAddress,cSchedule);
//get and add in staffList class
let staffManagement=new StaffManagement();
staffManagement.addWaiter(soyuWaiter);
staffManagement.addClerk(yeyeClerk);
staffManagement.addReceptionist(aResceptionist);
staffManagement.addShefts(bSheft);
staffManagement.addSecurityman(cSecurityman);
// console.log(staffManagement);
// ========================================== MonthPayment ==========================================
let januaryPayment=new MonthPayment('January',300,50,1000);
januaryPayment.getTotalOfPayment(staffManagement);
let februaryPayment=new MonthPayment('February',200,20,700);
februaryPayment.getTotalOfPayment(staffManagement);
// ============================================ Manager =============================================

let manager=new Manager('sp',22,Gender.FEMALE,Position.MANAGER);
manager.addMonthPayment(januaryPayment);
manager.addMonthPayment(februaryPayment);
// console.log(manager);
//=========================================== Add Customer ============================================
//
// ======================================== Customers Address =========================================
// Sreykea Address
let sreykeaAddress = new Address('Phnom Penh','#ST230',97252484,'No47D');
// Mey Address
let meyAddress = new Address('Phnom Penh','#ST28',85894545,'No48A');
// Add foods
//Sreykea Foodsc
let sreykeaFoodKoko=new Food(Foods.KOKO,5);
let sreykeaFoodFryVeg=new Food(Foods.FRYVEGETABLE,3);
//Mey Foods
let meyFoodFryEgg=new Food(Foods.FRYEGG,2);
let meyFoodMaju=new Food(Foods.MAJU,3);
// Cus Sreykea
let sreykeaOrder=new OnlineOrder(sreykeaAddress);
sreykeaOrder.addFood(sreykeaFoodKoko)
sreykeaOrder.addFood(sreykeaFoodFryVeg)
let sreykeaReceipt=new Receipt('SP_Restaurant');
sreykeaReceipt.addFoodList(meyFoodFryEgg,meyFoodMaju);
let sreykeaPayment=new Payment(sreykeaReceipt);
let sreykeaOnlineCus=new OnlineCustomers('sreykea',22,Gender.FEMALE,Position.ONLINECUS,sreykeaPayment);
sreykeaOnlineCus.addOrder(sreykeaOrder);
// Cus Mey
let meyOrder=new OnlineOrder(meyAddress);
meyOrder.addFood(meyFoodFryEgg)
meyOrder.addFood(meyFoodMaju)
let meyReceipt=new Receipt('SP_Restaurant');
meyReceipt.addFoodList(meyFoodFryEgg,meyFoodMaju);
let meyPayment=new Payment(meyReceipt);
let meyOnlineCus=new OnlineCustomers('mey',20,Gender.FEMALE,Position.ONLINECUS,meyPayment);
meyOnlineCus.addOrder(meyOrder);
// console.log(onlinecustomers);

// OutlineCustomers----------------------
// let table = new Table(1,2);
// let sreyKea = new OutLineCustomers("Sreykea Reun",Gender.FEMALE,table);
// let maju = new Food(Foods.MAJU, 2);
// sreyKea.addFood(maju);
// console.log(sreyKea);

// ========================================== Customers Class ===========================================
let customerManagement=new CustomerManagement();
customerManagement.addOnlineCus(sreykeaOnlineCus);
customerManagement.addOnlineCus(meyOnlineCus);
// console.log(customerManagement);

//
let phnomPenh = new Address("Phnom Penh", "str 2004", 12495969, "houseNo49");
let vegetables = new Food(Foods.FRYVEGETABLE, 1);
let soup = new Food(Foods.KHMERSUOP, 5);
let table1 = new Table(1, 4);
let table2 = new Table(2, 5);
// console.log(customersList);

// ==========================================  restaurantInfo ===========================================
let restaurantInfo = new RestaurantInfo("SP_Restaurant", phnomPenh);
restaurantInfo.addFood(vegetables);
restaurantInfo.addFood(soup);
restaurantInfo.setTable(table1);
restaurantInfo.setTable(table2);
// console.log(restaurantInfo);
// ========================================= RMS =====================================================
let restaurantMS=new RestaurantMS('Restaurant Management System',restaurantInfo,manager);
restaurantMS.addStaffManagement(staffManagement);
restaurantMS.addCusManagement(customerManagement);

console.log(restaurantMS);

