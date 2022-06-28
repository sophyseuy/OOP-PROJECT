import { Restaurant } from "../RMS/Restaurant";
import { Clerk } from "./Clerk";
import { Staff } from "./Staff";
import { Waiter } from "./Waiter";

export class StaffList{
    // private staffList:Waiter[]|Clerk[]=[];
    private waiter:Waiter[]=[];
    private clerk:Clerk[]=[];
    constructor(){}
    addWaiter(waiter:Waiter){
        this.waiter.push(waiter)
    }
    addClerk(clerk:Clerk){
        this.clerk.push(clerk)
    }
    // addToStaffList(this.waiter){
        
    // }
    // getStaffList(){
    //     return this.staffList;
    // }
}