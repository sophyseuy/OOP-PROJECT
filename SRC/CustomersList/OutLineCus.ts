import { Food,Foods } from "../sourceOfManyClass/Food";
import { Table } from "../RestaurantInfo/Table";
import { Customers,Gender } from "./Customers";

export class OutLineCustomers extends Customers{
    private foods:Food[]=[];
    constructor(fullName:string,gender:Gender,table:Table){
        super(fullName)
    }
   addFood(food:Food){
    this.foods.push(food);
   }
 
}
let table = new Table(1,2);
let sreyKea = new OutLineCustomers("Sreykea Reun",Gender.Female,table);
let maju = new Food(Foods.MAJU, 2);
sreyKea.addFood(maju);
console.log(sreyKea);
