import { Address } from "../sourceOfManyClass/Address";
import { Food } from "../sourceOfManyClass/Food";
import { Gender } from "../sourceOfManyClass/Gender";
import { Payment } from "../sourceOfManyClass/Payment";
import { Person } from "../StaffManagement/Person";
import { Position } from "../StaffManagement/Positionn";
import { Customers } from "./Customers";
// Orders
export class OnlineOrder {
    private foods: Food[] = [];
    constructor(private address: Address) { }
    getCusAddress() {
        return this.address;
    }
    addFood(...food: Food[]) {
        this.foods = this.foods.concat(food)
    }
    getCusFoods() {
        return this.foods;
    }
}
// Customers
export class OnlineCustomers extends Person {
    private order: OnlineOrder[] = [];
    constructor(
        fullName: string,
        age: number, gender: Gender,
        position: Position,
        private payment: Payment) {
        super(fullName, age, gender, position);
    }
    addOrder(...orders: OnlineOrder[]) {
        this.order=this.order.concat(orders)
    }
    getCusName() {
        return this.fullName;
    }
    getAge() {
        return this.age;
    }
    getGender() {
        return this.gender;
    }
    getPosition() {
        return this.position;
    }
    getOrdered() {
        return this.order;
    }
    getPayment() {
        return this.payment;
    }
}

