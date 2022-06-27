import { Restaurant } from "../Restaurant"
import { MonthPayment } from "./MonthlyPayment";
import { StaffList } from "./StaffList";

export class Manager extends Restaurant{
    constructor(name:string,
        income:number,
        monthPayment:MonthPayment[],
        staffList:StaffList[]){
        super(name)
    }
}