import { StaffList } from "./StaffList";
export class MonthPayment{
    private staffList:StaffList;
    constructor(private month:string,
        private foodIngredients:number,
        private restProperty:number,
        private income:number,
        ){}
        getMonth(){
            return this.month;
        }
        getFoodIngredients(){
            return this.foodIngredients;
        }
        getRestProperty(){
            return this.restProperty;
        }
        getIncome(){
            return this.income;
        }
        // getTotalOfPayment(){
        //     return this.staffList.salary
        // }
        
}