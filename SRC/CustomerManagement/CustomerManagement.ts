import { OnlineCustomers } from "./OnlineCus";
import { OutLineCustomers } from "./OutLineCus";

export class CustomerManagement{
    private onlineCus:OnlineCustomers[]=[];
    private outLineCus:OutLineCustomers[]=[];
    constructor(){}
    addOnlineCus(cus:OnlineCustomers){
        this.onlineCus.push(cus)
    }
    addOutlineCus(cus:OutLineCustomers){
        this.outLineCus.push(cus)
    }
    getOnlineCus(){
        return this.onlineCus;
    }
    getOutlineCus(){
        return this.outLineCus;
    }
}