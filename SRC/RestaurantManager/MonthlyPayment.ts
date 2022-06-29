
import { StaffManagement } from "../StaffManagement/StaffManagement";
export class MonthPayment {
    constructor(private month: string,
        private foodIngredients: number,
        private restProperty: number,
        private income: number,
    ) { }
    getMonth() {
        return this.month;
    }
    getFoodIngredients() {
        return this.foodIngredients;
    }
    getRestProperty() {
        return this.restProperty;
    }
    getIncome() {
        return this.income;
    }
    getTotalOfPayment(para:StaffManagement){
        let totalMonthPayment:number=0;
        totalMonthPayment+=this.getFoodIngredients()
        totalMonthPayment+=this.getRestProperty();
        totalMonthPayment+=para.getPaid()
        totalMonthPayment+=para.getPaid();
        totalMonthPayment+=para.getPaid();
        
        console.log(totalMonthPayment);
    }
}
