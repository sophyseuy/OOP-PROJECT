import { Restaurant } from "../Restaurant";
import { Onlinecustomers } from "./OnlineCus";
export enum Gender{
    Male='male',
    Female='Female'
}
export class Customers{
    private onlineCus:Onlinecustomers[]=[];
constructor(private customerType:string){}
addOnlineCus(cus:Onlinecustomers){
    this.onlineCus=this.onlineCus.concat(cus)
}
getOnlineCus(){
    return this.onlineCus;
}
}