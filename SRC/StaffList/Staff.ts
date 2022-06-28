import { Gender } from "../CustomersList/Customers";
import { StaffList } from "./StaffList";
import { Address } from "../sourceOfManyClass/Address";
import { Position } from "./Positionn";
import { Schedule } from "./Schedule";

export abstract class Staff{
    constructor(
        private fullName: string,
        private gender: Gender,
        private age: number,
        private salary: number,
        private abaNumber:string,
        private address: Address,
        public schedule: Schedule,
        private position:Position
     ) {}
}
