import { CustomerManagement } from "../CustomerManagement/CustomerManagement";
import { RestaurantInfo } from "../RestaurantInfo/RestaurantInfo";
import { Manager } from "../RestaurantManager/Manager";
import { StaffManagement } from "../StaffManagement/StaffManagement";
import { Restaurant } from "./Restaurant";

export class RestaurantMS extends Restaurant {
    protected staffManagement: StaffManagement[] = [];
    protected customerManagement: CustomerManagement[] = [];
    constructor(name: string,protected RestaurantInfo: RestaurantInfo,private manager:Manager) {
        super(name)
    }
    addStaffManagement(staffManagement: StaffManagement) {
        this.staffManagement.push(staffManagement)
    }
    addCusManagement(cusManagement:CustomerManagement) {
        this.customerManagement.push(cusManagement)
    }
    getStaffManagement() {
        return this.staffManagement;
    }
    getCusManagement() {
        return this.customerManagement;
    }
    getRestaurantInfo(){
        return this.RestaurantInfo;
    }
    getManager(){
        return this.manager;
    }

}