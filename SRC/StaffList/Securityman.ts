import { Gender } from "../CustomersList/Customers";
import { Address } from "../sourceOfManyClass/Address";
import { Position } from "./Positionn";
import { Schedule } from "./Schedule";
import { Staff } from "./Staff";

export class Securityman extends Staff{
    constructor(
        name: string,
        gender: Gender,
        age: number,
        salary: number,
        abaNumber:string,
        address: Address,
       schedule: Schedule,
        position:Position
   ){
       super(name,gender,age,salary,abaNumber,address,schedule,position);
   }
}