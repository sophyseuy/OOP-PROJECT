import { CustomerList } from "../CustomersList/CustomerList";
import { RestaurantInfo } from "../RestaurantInfo/RestaurantInfo";
import { StaffList } from "../StaffList/StaffList";
import { Restaurant } from "./Restaurant";

export class RestaurantMS extends Restaurant{
    protected staffLists:StaffList[]=[];
    protected customerLists:CustomerList[]=[];
    protected RestaurantInfo:RestaurantInfo;
}