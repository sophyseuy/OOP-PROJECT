import { Restaurant } from "../Restaurant"
import { MonthPayment } from "./MonthlyPayment";
import { StaffList } from "./StaffList";

export class Manager extends Restaurant{
    protected monthPayment:MonthPayment[]=[];
    constructor(name:string, protected staffList:StaffList){
        super(name)
    }
    addMonthPayment(param){
        this.monthPayment.push(param);
    }
    getStaffList(){
        return this.staffList;
    }
    getMonthPayment(){
        return this.monthPayment;
    }
}