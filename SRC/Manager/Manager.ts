import { Restaurant } from "../Restaurant"
import { MonthPayment } from "./MonthlyPayment";
import { StaffList } from "../StaffList/StaffList";

export class Manager extends Restaurant{
    constructor(name:string,monthPayment:MonthPayment[],staffList:StaffList){
        super(name)
    }
}