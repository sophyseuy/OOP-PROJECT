"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthPayment = void 0;
class MonthPayment {
    constructor(month, foodIngredients, restProperty, income) {
        this.month = month;
        this.foodIngredients = foodIngredients;
        this.restProperty = restProperty;
        this.income = income;
    }
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
}
exports.MonthPayment = MonthPayment;
