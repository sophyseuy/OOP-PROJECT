import { Restaurant } from "../Restaurant";
import { Clerk } from "../Staff/Clerk";
import { Staff } from "../Staff/Staff";
import { Waiter } from "../Staff/Waiter";

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