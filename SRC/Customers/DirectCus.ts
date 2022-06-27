import { Food } from "../RestaurantInfor/Food lists";
import { Table } from "../RestaurantInfor/TableList";
import { Customers,Gender } from "./Customers";

export class DirectCustomers extends Customers{
    constructor(name:string,gender:Gender,table:Table,foods:Food[]){
        super(name,gender)
    }
}