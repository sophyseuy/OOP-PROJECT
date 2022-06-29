import { Food, Foods } from "./Food";

export class Receipt {
    public food: Food[] = []
    private total:number|string;
    constructor(private restarantName: string) { }
    addFoodList(...foodList:Food[]){
        this.food=this.food.concat(foodList)
    }
    getFoodList() {
        return this.food;
    }
    getAllPrice():string|number {
      let dolarSign:string="$";
      let totalPric:number=0;
        for (let price of this.food) {
            totalPric +=price.getPrice();
        }
        return (dolarSign+totalPric);
    }
    getTotal(){
        return this.total=this.getAllPrice();
    }
}
export class Payment{
    constructor( private receipt:Receipt){}
    getReceipt(){
        return this.receipt;
    }
}