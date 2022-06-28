// import { Customers, Gender } from "./CustomersList/Customers";
// import { Onlinecustomers } from "./CustomersList/OnlineCus";
// import { Manager } from "./StaffList/Manager/Manager";
// import { MonthPayment } from "./StaffList/Manager/MonthlyPayment";
// import { StaffList } from "./StaffList/StaffList";
// import { Food } from "./RestaurantInfor/FoodList";
// import { Address } from "./sourceOfManyClass/Address";
// import { Clerk } from "./StaffList/Clerk";
// import { Schedule } from "./StaffList/Schedule";
// import { Staff } from "./StaffList/Staff";
// import { Waiter } from "./StaffList/Waiter";
// //Set schedule
// let soyuSchedule = new Schedule('Mon-Fri', 'Sat-Sun', '7:am-8pm');
// let yeyeSchedule = new Schedule('Mon-Fri', 'Sat-Sun', '7:am-8pm');
// // Set Staff address
// let soyuAddress = new Address('Phnom Penh','#ST2002',13222444,'No5');
// let yeyeAddress = new Address('Phnom Penh','#ST371',25302444,'No02');
// // Customers Address
// // Sreykea Address
// let sreykeaAddress = new Address('Phnom Penh','#ST230',97252484,'No47D');
// // Mey Address
// let meyAddress = new Address('Phnom Penh','#ST28',85894545,'No48A');
// // Add foods
// //Sreykea Foodsc
// let sreykeaFoodKoko=new Food('koko',5);
// let sreykeaFoodFryVeg=new Food('FryVegetable',3);
// //Mey Foods
// let meyFoodFryEgg=new Food('fry egg',2);
// let meyFoodMaju=new Food('Maju',3);
// // set staff info
// let soyuWaiter = new Waiter('soyu', Gender.Female, 19,300,'002724999',soyuAddress,soyuSchedule,'Waiter');
// let yeyeClerk = new Clerk('yeye', Gender.Male, 23,300,'002744990',yeyeAddress,yeyeSchedule,'clerk');
// //get and add in staffList class
// let staffList=new StaffList();
// staffList.addWaiter(soyuWaiter);
// staffList.addClerk(yeyeClerk);
// // MonthPayment
// let januaryPayment=new MonthPayment('January',300,50,1000);
// let februaryPayment=new MonthPayment('February',200,20,700);
// //Manager
// let manager=new Manager('sp',staffList);
// manager.addMonthPayment(januaryPayment);
// manager.addMonthPayment(februaryPayment);
// console.log(manager.getStaffList());
// // console.log(manager);
// //Add Customer
// // Cus Sreykea
// let sreykeaOnlineCus=new Onlinecustomers('sreykea',Gender.Female,sreykeaAddress);
// sreykeaOnlineCus.addFood(sreykeaFoodKoko)
// sreykeaOnlineCus.addFood(sreykeaFoodFryVeg)
// // Cus Mey
// let meyOnlineCus=new Onlinecustomers('mey',Gender.Female,meyAddress);
// meyOnlineCus.addFood(meyFoodFryEgg)
// meyOnlineCus.addFood(meyFoodMaju)
// // console.log(onlinecustomers);
// // Customers Class
// let customers=new Customers('Online customers');
// customers.addOnlineCus(sreykeaOnlineCus);
// customers.addOnlineCus(meyOnlineCus);
// // console.log(customers.getOnlineCus());
