import { Food } from "../RestaurantInfor/Food";
import { Table } from "../RestaurantInfor/Table";
import { Customers,Gender } from "./Customers";

export class DirectCustomers{
    constructor(private name:string,gender:Gender,table:Table,foods:Food[]){}
}
