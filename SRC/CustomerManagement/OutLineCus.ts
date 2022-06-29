import { Food } from "../sourceOfManyClass/Food";
import { Table } from "../RestaurantInfo/Table";
import { Gender } from "../sourceOfManyClass/Gender";
import { Payment } from "../sourceOfManyClass/Payment";


export class OutlineOrder {
    private foods:Food[]=[];
    
    constructor(private table:Table){}
    addFood(...food: Food[]) {
        this.foods = this.foods.concat(food)
    }
    getCusFoods() {
        return this.foods;
    }
    getTable(){
        return this.table;
       }
}
export class OutLineCustomers {
    private order: OutlineOrder[] = [];
    constructor(
        private gender:Gender,
        private payment: Payment
        ){
    }
   getGender(){
    return this.gender;
   }
  
   addOrder(...orders: OutlineOrder[]) {
        this.order=this.order.concat(orders)
    }
    
    getOrdered() {
        return this.order;
    }
    getPayment() {
        return this.payment;
    }
}
