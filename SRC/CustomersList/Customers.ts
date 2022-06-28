import { Restaurant } from "../RMS/Restaurant";
import { Onlinecustomers } from "./OnlineCus";
export enum Gender {
    Male = 'male',
    Female = 'Female'
}
export abstract class Customers {
    constructor(private fullName:string){}
}