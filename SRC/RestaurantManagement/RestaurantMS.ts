import { CustomerManagement } from "../CustomerManagement/CustomerManagement";
import { Customers } from "../CustomerManagement/Customers";
import { RestaurantInfo } from "../RestaurantInfo/RestaurantInfo";
import { Manager } from "../RestaurantManager/Manager";
import { StaffList } from "../StaffManagement/StaffList";
import { Restaurant } from "./Restaurant";

export class RestaurantMS extends Restaurant {
    protected staffManagement: StaffList[] = [];
    protected customerManagement: CustomerManagement[] = [];
    cusManagement: any;
    constructor(name: string,protected RestaurantInfo: RestaurantInfo,private manager:Manager) {
        super(name)
    }
    addStaffManagement(staffManagement: StaffList) {
        this.staffManagement.push(staffManagement)
    }
    addCusManagement(cusManagement:CustomerManagement) {
        this.customerManagement.push(cusManagement)
    }
    getStaffManagement() {
        return this.staffManagement;
    }
    getCusManagement() {
        return this.cusManagement;
    }
    getRestaurantInfo(){
        return this.RestaurantInfo;
    }
    getManager(){
        return this.manager;
    }

}