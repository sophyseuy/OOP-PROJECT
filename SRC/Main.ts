import { Customers, Gender } from "./CustomersList/Customers";
import { Onlinecustomers } from "./CustomersList/OnlineCus";
import { Manager } from "./StaffList/Manager/Manager";
import { MonthPayment } from "./StaffList/Manager/MonthlyPayment";
import { StaffList } from "./StaffList/StaffList";
import { FoodList } from "./RestaurantInfo/FoodList";
import { Address } from "./sourceOfManyClass/Address";
import { Clerk } from "./StaffList/Clerk";
import { Schedule } from "./StaffList/Schedule";
import { Waiter } from "./StaffList/Waiter";
import { Food, Foods } from "./sourceOfManyClass/Food";
import { CustomerList } from "./CustomersList/CustomerList";
import { Position } from "./StaffList/Positionn";
import { RestaurantMS } from "./RMS/RestaurantMS";
import { Table } from "./RestaurantInfo/Table";
import { RestaurantInfo } from "./RestaurantInfo/RestaurantInfo";
import { OutLineCustomers } from "./CustomersList/OutLineCus";
// ======================================== Set schedule =================================================
let soyuSchedule = new Schedule('Mon-Fri', 'Sat-Sun', '7:am-8pm');
let yeyeSchedule = new Schedule('Mon-Fri', 'Sat-Sun', '7:am-8pm');
// ======================================== Set Staff address ============================================
let soyuAddress = new Address('Phnom Penh','#ST2002',13222444,'No5');
let yeyeAddress = new Address('Phnom Penh','#ST371',25302444,'No02');
// ======================================== Customers Address ============================================
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
// set staff info
let soyuWaiter = new Waiter('soyu', Gender.Female, 19,300,'002724999',soyuAddress,soyuSchedule,Position.WAITER);
let yeyeClerk = new Clerk('yeye', Gender.Male, 23,300,'002744990',yeyeAddress,yeyeSchedule,Position.CLERK);
//get and add in staffList class
let staffList=new StaffList();
staffList.addWaiter(soyuWaiter);
staffList.addClerk(yeyeClerk);

// ========================================== MonthPayment ==========================================
let januaryPayment=new MonthPayment('January',300,50,1000);
let februaryPayment=new MonthPayment('February',200,20,700);
// ============================================ Manager =============================================
let managerAddress = new Address('Phnom Penh','#ST371',12335566,'No47D');
let managerSchedult = new Schedule('Mon-Fri', 'Sat-Sun', '7:am-8pm');

let manager=new Manager('sp',Gender.Female,22,1000,'002725213',managerAddress,managerSchedult,Position.MANAGER);
manager.addMonthPayment(januaryPayment);
manager.addMonthPayment(februaryPayment);
// console.log(manager.getStaffList());
// console.log(manager);
//========================================== Add Customer ===========================================
// Cus Sreykea
let sreykeaOnlineCus=new Onlinecustomers('sreykea',Gender.Female,sreykeaAddress);
sreykeaOnlineCus.addFood(sreykeaFoodKoko)
sreykeaOnlineCus.addFood(sreykeaFoodFryVeg)
// Cus Mey
let meyOnlineCus=new Onlinecustomers('mey',Gender.Female,meyAddress);
meyOnlineCus.addFood(meyFoodFryEgg)
meyOnlineCus.addFood(meyFoodMaju)
// console.log(onlinecustomers);

// OutlineCustomers----------------------
let table = new Table(1,2);
let sreyKea = new OutLineCustomers("Sreykea Reun",Gender.Female,table);
let maju = new Food(Foods.MAJU, 2);
sreyKea.addFood(maju);
console.log(sreyKea);

// ========================================== Customers Class ===========================================
let customersList=new CustomerList();
customersList.addOnlineCus(sreykeaOnlineCus);
customersList.addOnlineCus(meyOnlineCus);
customersList.addOutlineCus(sreyKea);

//
let phnomPenh = new Address("Phnom Penh", "str 2004", 12495969, "houseNo49");
let vegetables = new Food(Foods.FRYVEGETABLE, 1);
let soup = new Food(Foods.KHMERSUOP, 5);
let table1 = new Table(1, 4);
let table2 = new Table(2, 5);
// ==========================================  restaurantInfo ===========================================
let restaurantInfo = new RestaurantInfo("SP_Restaurant", phnomPenh);
restaurantInfo.addFood(vegetables);
restaurantInfo.addFood(soup);
restaurantInfo.setTable(table1);
restaurantInfo.setTable(table2);
// console.log(restaurantInfo);
// console.log(customersList);
// ========================================= RMS =====================================================
let restaurantMS=new RestaurantMS('Restaurant Management System',restaurantInfo);
restaurantMS.addStaffList(staffList);
restaurantMS.addCusList(customersList);
console.log(restaurantMS);

