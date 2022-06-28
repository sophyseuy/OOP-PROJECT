import { Gender } from "../Customers/Customers";
import { StaffList } from "../Manager/StaffList";
import { Address } from "../sourceOfManyClass/Address";
import { Schedule } from "./Schedule";

export abstract class Staff{
    constructor(
        private name: string,
        private gender: Gender,
        private age: number,
        private salary: number,
        private abaNumber:string,
        private address: Address,
        public schedule: Schedule,
        private position:string
     ) {}
}
