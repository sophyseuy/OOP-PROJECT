import { Gender } from "../Customers/Customers";
import { Address } from "../sourceOfManyClass/Address";
import { Schedule } from "./Schedule";
import { Staff } from "./Staff";

export class Waiter extends Staff{
    constructor(
        name: string,
        gender: Gender,
        age: number,
        salary: number,
        abaNumber:string,
        address: Address,
       schedule: Schedule,
        position:string
   ){
       super(name,gender,age,salary,abaNumber,address,schedule,position);
   }
}