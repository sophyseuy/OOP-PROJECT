import { Restaurant } from "../RestaurantManagement/Restaurant";
import { Manager } from "../RestaurantManager/Manager";
import { Staff } from "./Staff";


export class StaffList {
    private manager: Manager;
    private shefts: Staff[] = [];
    private waiter: Staff[] = [];
    private clerk: Staff[] = [];
    private receptionist: Staff[] = [];
    private securityman: Staff[] = [];
    constructor() { }
    // Add Functions
    addManager(manager: Manager) {
        this.manager = manager;
    }
    addShefts(sheft: Staff) {
        this.shefts.push(sheft);
    }
    addWaiter(waiter: Staff) {
        this.waiter.push(waiter);
    }
    addClerk(clerk: Staff) {
        this.clerk.push(clerk);
    }
    addReceptionist(receptionist: Staff) {
        this.receptionist.push(receptionist);
    }
    addSecurityman(securityman: Staff) {
        this.securityman.push(securityman);
    }
    // Get Functions
    getManager() {
        return  this.manager
    }
    getShefts() {
        return this.shefts;
    }
    getWaiter() {
        return this.waiter;
    }
    getClerk() {
        return this.clerk;
    }
    getReceptionist() {
        return this.receptionist;
    }
    getSecurityman() {
        return this.securityman;
    }

}