import { Address } from "../sourceOfManyClass/Address";
import { Food } from "../sourceOfManyClass/Food";
import { Customers, Gender } from "./Customers";
export class Onlinecustomers extends Customers{
    private foods:Food[]=[];
    constructor(private name:string,private gender:Gender,private address:Address){
        super(name);

    }
    addFood(food:Food){
        this.foods.push(food)
    }
    getCusName(){
        return this.name;
    }
    getGender(){
        return this.gender;
    }
    getCusAddress(){
        return this.address;
    }
    getCusFoods(){
        return this.foods;
    }
}
