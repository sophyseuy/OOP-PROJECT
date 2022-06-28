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
