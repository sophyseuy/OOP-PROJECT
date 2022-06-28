import { Restaurant } from "../RMS/Restaurant";
import { Clerk } from "./Clerk";
import { Manager } from "./Manager/Manager";
import { Receptionist } from "./Receptionist";
import { Securityman } from "./Securityman";
import { Sheft } from "./Sheft";
import { Staff } from "./Staff";
import { Waiter } from "./Waiter";

export class StaffList {
    private manager: Manager;
    private shefts: Sheft[] = [];
    private waiter: Waiter[] = [];
    private clerk: Clerk[] = [];
    private receptionist: Receptionist[] = [];
    private securityman: Securityman[] = [];
    constructor() { }
    // Add Functions
    addManager(manager: Manager) {
        this.manager = manager;
    }
    addShefts(sheft: Sheft) {
        this.shefts.push(sheft);
    }
    addWaiter(waiter: Waiter) {
        this.waiter.push(waiter);
    }
    addClerk(clerk: Clerk) {
        this.clerk.push(clerk);
    }
    addReceptionist(receptionist: Receptionist) {
        this.receptionist.push(receptionist);
    }
    addSecurityman(securityman: Securityman) {
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