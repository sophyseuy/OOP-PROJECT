import { StaffList } from "./StaffList";
import { Address } from "../sourceOfManyClass/Address";
import { Schedule } from "./Schedule";

export class Staff{
    constructor(name: string,
        gender: string,
        age: number,
        private salary: number,
        public schedule: Schedule,
        private address: Address) {
    }
}