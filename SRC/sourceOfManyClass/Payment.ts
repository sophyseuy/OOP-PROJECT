import { Food, Foods } from "./Food";

export class Receipt {
    public food: Food[] = []
    constructor(private restarantName: string) { }
    addFoodList(...foodList:Food[]){
        this.food.concat(foodList)
    }
    getFoodList() {
        return this.food;
    }
    getTotalPaid() {
        let total: number = 0;
        for (let price of this.getFoodList()) {
            total += price.getPrice();
        }
    }
}
export class Payment{
    constructor( private receipt:Receipt){}
    getReceipt(){
        return this.receipt;
    }
}