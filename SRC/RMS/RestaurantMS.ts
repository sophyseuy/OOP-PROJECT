import { CustomerList } from "../CustomersList/CustomerList";
import { Customers } from "../CustomersList/Customers";
import { RestaurantInfo } from "../RestaurantInfo/RestaurantInfo";
import { StaffList } from "../StaffList/StaffList";
import { Restaurant } from "./Restaurant";

export class RestaurantMS extends Restaurant {
    protected staffLists: StaffList[] = [];
    protected customerLists: CustomerList[] = [];
    constructor(name: string,protected RestaurantInfo: RestaurantInfo) {
        super(name)
    }
    addStaffList(staffList: StaffList) {
        this.staffLists.push(staffList)
    }
    addCusList(cusList:CustomerList) {
        this.customerLists.push(cusList)
    }
    getStaffList() {
        return this.staffLists;
    }
    getCusList() {
        return this.customerLists;
    }
    getRestaurantInfo(){
        return this.RestaurantInfo;
    }

}