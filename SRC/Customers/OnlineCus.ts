import { Address } from "../sourceOfManyClass/Address";
import { Food } from "../RestaurantInfor/Food";
import { Customers, Gender } from "../Customers/Customers";
export class Onlinecustomers extends Customers{
    constructor(name:string,gender:Gender,address:Address,food:Food[]){
        super(name,gender)
    }
}
