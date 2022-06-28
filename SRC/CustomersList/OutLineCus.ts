import { Food } from "../sourceOfManyClass/Food";
import { Table } from "../RestaurantInfo/Table";
import { Customers,Gender } from "./Customers";

export class OutLineCustomers extends Customers{
    constructor(private name:string,gender:Gender,table:Table,foods:Food[]){
        super(name)
    }
}
