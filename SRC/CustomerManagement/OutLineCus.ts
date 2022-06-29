import { Food } from "../sourceOfManyClass/Food";
import { Table } from "../RestaurantInfo/Table";
import { Customers,Gender } from "./Customers";

export class OutLineCustomers extends Customers{
    private foods:Food[]=[];
    constructor(fullName:string,private gender:Gender,private table:Table){
        super(fullName)
    }
   addFood(food:Food){
    this.foods.push(food);
   }
   getGender(){
    return this.gender;
   }
   getTable(){
    return this.table;
   }
 
}
