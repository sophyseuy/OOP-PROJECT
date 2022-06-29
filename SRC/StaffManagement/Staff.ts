
import { Address } from "../sourceOfManyClass/Address";
import { Position } from "./Positionn";
import { Schedule } from "./Schedule";
import { Person } from "./Person";
import { Gender } from "../sourceOfManyClass/Gender";

export class Staff extends Person {
    constructor(fullName: string, age: number, gender: Gender,position: Position,
        private salary: number,
        private abaNumber: string,
        private address: Address,
        public schedule: Schedule,
      
    ) { super(fullName, age, gender,position) }
    getFullName(){
        return this.fullName;
    }
    getAge(){
        return this.age;
    }
    getGender(){
        return this.gender;
    }
    getSalary(){
        return this.salary;
    }
    getAbaNumber(){
        return this.abaNumber;
    }
    getAddress(){
        return this.address;
    }
    getSchedule(){
        return this.schedule;
    }
    getPosition(){
        return this.position;
    }
}
