import { Onlinecustomers } from "./OnlineCus";
import { OutLineCustomers } from "./OutLineCus";

export class CustomerList{
    private onlineCus:Onlinecustomers[]=[];
    private outLineCus:OutLineCustomers[]=[];
    constructor(){}
    addOnlineCus(cus:Onlinecustomers){
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