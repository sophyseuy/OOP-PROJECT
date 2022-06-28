import { Address } from "../sourceOfManyClass/Address";
import { Food } from "../RestaurantInfor/Food lists";
import { Customers, Gender } from "../Customers/Customers";
export class Onlinecustomers{
    private foods:Food[]=[];
    constructor(private name:string,private gender:Gender,private address:Address){

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
