import { Restaurant } from "../Restaurant";

export class StaffList extends Restaurant{
    constructor(name:string,private gender:string, private age:number){
        super(name)
    }
}