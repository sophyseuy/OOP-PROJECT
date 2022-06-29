
import { MonthPayment } from "./MonthlyPayment";
import { Gender } from "../sourceOfManyClass/Gender";
import { Position } from "../StaffManagement/Positionn";
import { Person } from "../StaffManagement/Person";

export class Manager extends Person {
    constructor(
        name: string,
        age: number,
        gender: Gender,
        position:Position,
    
    ) {
        super(name, age, gender,position);
    }
    protected monthPayment: MonthPayment[] = [];

    addMonthPayment(param) {
        this.monthPayment.push(param);
    }
    getMonthPayment() {
        return this.monthPayment;
    }
}