import { Restaurant } from "../RestaurantManagement/Restaurant";
import { OnlineCustomers } from "./OnlineCus";
export enum Gender {
    Male = 'male',
    Female = 'Female'
}
export abstract class Customers {
    constructor(private fullName:string){}
}