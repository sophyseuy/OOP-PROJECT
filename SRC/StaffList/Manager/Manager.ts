import { Restaurant } from "../../RMS/Restaurant"
import { MonthPayment } from "./MonthlyPayment";
import { StaffList } from "../StaffList";
import { Staff } from "../Staff";
import { Address } from "../../sourceOfManyClass/Address";
import { Gender } from "../../CustomersList/Customers";
import { Position } from "../Positionn";
import { Schedule } from "../Schedule";

export class Manager extends Staff {
    constructor(
        name: string,
        gender: Gender,
        age: number,
        salary: number,
        abaNumber: string,
        address: Address,
        schedule: Schedule,
        position: Position
    ) {
        super(name, gender, age, salary, abaNumber, address, schedule, position);
    }
    protected monthPayment: MonthPayment[] = [];

    addMonthPayment(param) {
        this.monthPayment.push(param);
    }
    getMonthPayment() {
        return this.monthPayment;
    }
}